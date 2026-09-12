> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/presentation-views-and-attachments](https://developer.apple.com/documentation/realitykit/presentation-views-and-attachments)

# Views and attachments

**Framework:** RealityKit  
**Kind:** API Collection

Bring RealityKit content into your app with views and renderers.

<a id="Overview"></a>

## Overview

Views are the building blocks for apps that include RealityKit content. Each view displays RealityKit content in your app either by rendering the content in a window, volume, or an immersive space.

## Topics

### SwiftUI scene presentation

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md): Choose a strategy for sizing frames and centering 3D content.
- [RealityView](realityview.md): A view that contains RealityKit content.
- [RealityViewContent](realityviewcontent.md): The content of a visionOS reality view.
- [RealityViewCameraContent](realityviewcameracontent.md): The content of a reality view that is displayed through a camera.
- [RealityViewContentProtocol](realityviewcontentprotocol.md): A protocol representing the content of a reality view.
- [RealityViewDefaultPlaceholder](realityviewdefaultplaceholder.md): A view that represents the default placeholder for a RealityView.
- [RealityViewEntityCollection](realityviewentitycollection.md): A collection of entities in a RealityView.
- [RealityViewLayoutOption](realityviewlayoutoption.md): Options that specify the frame sizing and content alignment option for `RealityView`.
- [EntityCollection](entitycollection.md): An ordered, mutable collection of entities.

### SwiftUI 3D model presentation

- [Model3D](model3d.md): A view that asynchronously loads and displays a 3D model.
- [Model3DPhase](model3dphase.md): The current phase of the asynchronous model loading operation.
- [ResolvedModel3D](resolvedmodel3d.md): A view for displaying static three-dimensional models.
- [Model3DPlaceholderContent](model3dplaceholdercontent.md): A container view that presents either a 3D model or a placeholder for one.
- [Model3DAsset](model3dasset.md): A container used to represent the asset loaded into the Model3D View.

### Metal workflow rendering

- [RealityRenderer](realityrenderer.md): A renderer that displays a RealityKit scene in an existing Metal workflow.
- [RealityRenderer.CameraSettings](realityrenderer/camerasettings-swift.struct.md): Settings for rendering with a camera.
- [RealityRenderer.CameraOutput](realityrenderer/cameraoutput.md): Output produced by rendering with a camera.
- [RealityRenderer.ImageBasedLight](realityrenderer/imagebasedlight.md): Describe the lighting properties for the scene.
- [RealityRenderer.MetalEventAction](realityrenderer/metaleventaction.md): The structure describing an event and value to be signaled or waited for.
- [RealityRenderer.EntityCollection](realityrenderer/entitycollection.md): A collection of entities in a [RealityRenderer](realityrenderer.md).

### SwiftUI view attachments

- [RealityViewAttachmentBuilderContent](realityviewattachmentbuildercontent.md): A view that gathers the attachment content for your current reality view.
- [Attachment](attachment.md): An attachment content you can use to gather an identifier and view.
- [RealityViewAttachments](realityviewattachments.md): The attachments that belong to a RealityView.
- [ViewAttachmentEntity](viewattachmententity.md): An entity that has a view attachment.
- [ViewAttachmentComponent](viewattachmentcomponent.md): A component containing additional information about a view attachment entity provided via the [entity(for:)](realityviewattachments/entity%28for_%29.md) function.
- [PresentationComponent](presentationcomponent.md): A component that presents a SwiftUI modal presentation from a RealityKit entity.
- [TextComponent](textcomponent.md): A component that draws 2D text at an entity’s location.

### Visual environment adjustments

- [RealityViewEnvironment](realityviewenvironment.md): A struct that determines the background and default lighting properties for a reality view.
- [RealityViewRenderingEffects](realityviewrenderingeffects.md): A struct for enabling and disabling rendering effects for RealityKit content.
- [RealityViewRenderingEffectMode](realityviewrenderingeffectmode.md): A mode that determines whether a rendering effect is enabled or disabled.
- [RealityViewDynamicRange](realityviewdynamicrange.md): Options that determine the state of high dynamic range rendering for virtual content.
- [AntialiasingMode](antialiasingmode.md): The rendering technique used to smooth edges of virtual content.
- [RealityViewPostProcessEffect](realityviewpostprocesseffect.md): A struct for enabling or disabling post processing effects for all content a reality view contains.
- [PostProcessEffectContext](postprocesseffectcontext.md): An object RealityKit passes data to a post process effect method.
- [ARView.Environment](arview/environment-swift.struct.md): A description of background, lighting, and acoustic properties for a view’s content.
- [ARView.RenderOptions](arview/renderoptions-swift.struct.md): The available rendering options that you use to selectively disable certain rendering effects.

### Postprocessing

- [Postprocessing effects](postprocessing-effects.md): Create special rendering effects for your RealityKit scenes.
- [ARView.PostProcessContext](arview/postprocesscontext.md): An object the framework uses to pass data to a postprocess callback.
- [ARView.RenderCallbacks](arview/rendercallbacks-swift.struct.md): A container that holds the view’s render callbacks.
- [PostProcessEffect](postprocesseffect.md): A protocol that defines hooks for custom post processing effects.

### Coordinate space conversions

- [RealityCoordinateSpaceConverting](realitycoordinatespaceconverting.md): A value that can be converted between SwiftUI `CoordinateSpace` and RealityKit `Entity`.
- [SceneRealityCoordinateSpace](scenerealitycoordinatespace.md): The coordinate space that represents the center of a RealityKit scene.
- [CameraRealityCoordinateSpace](camerarealitycoordinatespace.md): The coordinate space that represents the scene’s active camera.
- [RealityCoordinateSpace](realitycoordinatespace.md): A 3D coordinate space that exists within a RealityKit hierarchy.
- [RealityCoordinateSpaceProjecting](realitycoordinatespaceprojecting.md): A protocol for coordinate spaces that can project 2D points to and from 3D.

### Camera mode settings

- [RealityViewCamera](realityviewcamera.md): A camera for reality view scenes, that can be world tracking or virtual.
- [CameraControls](cameracontrols.md)
- [ARView.CameraMode](arview/cameramode-swift.enum.md): The available camera modes.

### Attachment types

- [AttachmentContentBuilder](attachmentcontentbuilder.md): A result builder that creates attachment content from closures.
- [AttachmentContent](attachmentcontent.md): A type that provides content for an attachment content builder.
- [TuplePackAttachmentContent](tuplepackattachmentcontent.md)
- [ConditionalAttachmentContent](conditionalattachmentcontent.md)
- [EmptyAttachmentContent](emptyattachmentcontent.md): A attachment content that doesn’t contain any content.
- [TupleAttachmentContent](tupleattachmentcontent.md): Deprecated.
- [AnyAttachmentContent](anyattachmentcontent.md): A type-erased attachment content.

### UIKit and AppKit presentation

- [ARView](arview.md): A view that enables you to display an AR experience with RealityKit.
- [ARView.DebugOptions](arview/debugoptions-swift.struct.md): Options for drawing overlay content in a scene that can aid in debugging.
- [ARViewBase](arviewbase.md): The platform-specific base class for the view into which RealityKit renders content.

## See Also

### Presentation

- [Presentation UI](presentation-user-interface.md): Control your app’s content and how people can interact with it.
- [Postprocessing effects](postprocessing-effects.md): Create special rendering effects for your RealityKit scenes.
