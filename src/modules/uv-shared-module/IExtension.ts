import {ILocale} from "../../ILocale";
import {IUVComponent} from "../../IUVComponent";
import {IUVData} from "../../IUVData";
import {MetricType} from "./MetricType";

export interface IExtension {
    addTimestamp(uri: string): string;
    changeLocale(locale: string): void;
    component: IUVComponent;
    data: IUVData;
    create(): void;
    createModules(): void;
    dependenciesLoaded(...args: any[]): void;
    dependencyLoaded(index: number, dep: any): void;
    exitFullScreen(): void;
    fire(name: string, ...args: any[]): void;
    getAlternateLocale(): ILocale | null;
    getAppUri(): string;
    getCanvasLabels(label: string): string;
    getCurrentCanvases(): Manifesto.ICanvas[];
    getCurrentCanvasRange(): Manifesto.IRange | null;
    getDependencies(callback: (deps: any) => void): any;
    getDomain(): string;
    getExternalResources(resources?: Manifesto.IExternalResource[]): Promise<Manifesto.IExternalResourceData[]>;
    getIIIFShareUrl(): string;
    getLocale(): string;
    getMediaFormats(canvas: Manifesto.ICanvas): Manifesto.IAnnotationBody[];
    getPagedIndices(canvasIndex?: number): number[];
    getSerializedLocales(): string;
    getSettings(): ISettings;
    getShareUrl(): string | null;
    height(): number;
    helper: Manifold.IHelper;
    isCreated: boolean;
    isDeepLinkingEnabled(): boolean;
    isFooterPanelEnabled(): boolean;
    isFullScreen(): boolean;
    isHeaderPanelEnabled(): boolean;
    isLeftPanelEnabled(): boolean;
    isLoggedIn: boolean;
    isMobileMetric(): boolean;
    isOverlayActive(): boolean;
    isRightPanelEnabled(): boolean;
    isSeeAlsoEnabled(): boolean;
    lastCanvasIndex: number;
    loadDependencies(deps: any): void;
    metric: MetricType;
    mouseX: number;
    mouseY: number;
    name: string;
    redirect(uri: string): void;
    refresh(): void;
    reload(data?: IUVData): void;
    resize(): void;
    resources: Manifesto.IExternalResourceData[] | null;
    shifted: boolean;
    showMessage(message: string, acceptCallback?: any, buttonText?: string, allowClose?: boolean): void;
    tabbing: boolean;
    update(): void;
    updateSettings(settings: ISettings): void;
    viewCanvas(canvasIndex: number): void;
    viewCollection(collection: Manifesto.ICollection): void;
    viewManifest(manifest: Manifesto.IManifest): void;
    width(): number;
}