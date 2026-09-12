> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkit-in-ios](https://developer.apple.com/documentation/arkit/arkit-in-ios)

# ARKit in iOS (Swift)

**Framework:** ARKit  
**Kind:** API Collection

Integrate iOS device camera and motion features to produce augmented reality experiences in your app or game.

## Topics

### Essentials

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md): Check whether your app can use ARKit and respect user privacy at runtime.
- [OpenUSD schemas for AR](../usd/usd-schemas-for-ar.md): Add augmented reality functionality to your 3D content using USD schemas.

### Setup

- [Choosing Which Camera Feed to Augment](choosing-which-camera-feed-to-augment.md): Add visual effects to the user’s environment in an AR experience through the front or rear camera.
- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md): Keep the user informed on the current session state and recover from interruptions.
- [Displaying an AR Experience with Metal](displaying-an-ar-experience-with-metal.md): Control rendering of your app’s virtual content on top of a camera feed.
- [ARSession](arsession.md): Deprecated. The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.
- [Configuration Objects](configuration-objects.md): Configure your augmented reality session to detect and track specific types of content.

### Views

- [RealityView](../realitykit/realityview.md): A view that contains RealityKit content.
- [ARView](../realitykit/arview.md): A view that enables you to display an AR experience with RealityKit.
- [ARSCNView](arscnview.md): Deprecated. A view that blends virtual 3D content from SceneKit into your augmented reality experience.
- [ARSKView](arskview.md): Deprecated. A view that blends virtual 2D content from SpriteKit into the 3D space of an augmented reality experience.
- [ARCoachingOverlayView](arcoachingoverlayview.md): Deprecated. A view that displays standardized onboarding instructions to direct users toward a specific goal.

### Virtual Content

- [Content Anchors](content-anchors.md): Identify items in the physical environment, including planar surfaces, images, physical objects, body positions, and faces.
- [Environmental Analysis](environmental-analysis.md): Analyze the video from the cameras and the accompanying data, and use ray-casting and depth-map information to determine the location of items.
- [Camera, Lighting, and Effects](camera-lighting-and-effects.md): Determine the camera position and lighting for the current session, and apply effects, such as occlusion, to elements of the environment.
- [Data Management](data-management.md): Obtain detailed information about skeletal and face geometry, and saved world data.
- [Creating USD files for Apple devices](../usd/creating-usd-files-for-apple-devices.md): Generate 3D assets that render as expected.

### AR Quick Look

Add an AR experience to your app or website, or customize your content’s appearance in Quick Look.

- [Previewing a Model with AR Quick Look](previewing-a-model-with-ar-quick-look.md): Display a model or scene that the user can move, scale, and share with others.
- [Adding Visual Effects in AR Quick Look and RealityKit](adding-visual-effects-in-ar-quick-look-and-realitykit.md): Balance the appearance and performance of your AR experiences with modeling strategies.
- [Adding an Apple Pay Button or a Custom Action in AR Quick Look](adding-an-apple-pay-button-or-a-custom-action-in-ar-quick-look.md): Provide a banner that users can tap to make a purchase or perform a custom action in an AR experience.
- [ARQuickLookPreviewItem](../quicklook/arquicklookpreviewitem.md)
- [OpenUSD schemas for AR](../usd/usd-schemas-for-ar.md): Add augmented reality functionality to your 3D content using USD schemas.
- [Specifying a lighting environment in AR Quick Look](specifying-a-lighting-environment-in-ar-quick-look.md): Add metadata to your USDZ file to specify its lighting characteristics.

### Shared Experiences

Communicate with other devices to create a shared AR experience.

- [Streaming an AR experience](streaming-an-ar-experience.md): Control an AR experience remotely by transferring sensor and user input over the network.
- [Creating a collaborative session](creating-a-collaborative-session.md): Enable nearby devices to share an AR experience by using a peer-to-peer multiuser strategy.
- [Creating a multiuser AR experience](creating-a-multiuser-ar-experience.md): Enable nearby devices to share an AR experience by using a host-guest multiuser strategy.
- [ARParticipantAnchor](arparticipantanchor.md): An anchor for another user in multiuser augmented reality experiences.
- [ARSession.CollaborationData](arsession/collaborationdata.md): An object that holds information that a user has collected about the physical environment.

### Audio

- [Creating an immersive ar experience with audio](creating-an-immersive-ar-experience-with-audio.md): Use sound effects and environmental sound layers to create an engaging AR experience.

### Errors

- [ARError](arerror.md): An error reported by ARKit.
- [ARError.Code](arerror/code.md): Codes that identify errors in ARKit.

## See Also

### iOS

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md): Check whether your app can use ARKit and respect user privacy at runtime.
- [ARSession](arsession.md): Deprecated. The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.
- [ARAnchor](aranchor.md): An object that specifies the position and orientation of an item in the physical environment.

# ARKit in iOS (Objective-C)

**Framework:** ARKit  
**Kind:** API Collection

Integrate iOS device camera and motion features to produce augmented reality experiences in your app or game.

## Topics

### Essentials

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md): Check whether your app can use ARKit and respect user privacy at runtime.
- [OpenUSD schemas for AR](../usd/usd-schemas-for-ar.md): Add augmented reality functionality to your 3D content using USD schemas.

### Setup

- [Choosing Which Camera Feed to Augment](choosing-which-camera-feed-to-augment.md): Add visual effects to the user’s environment in an AR experience through the front or rear camera.
- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md): Keep the user informed on the current session state and recover from interruptions.
- [Displaying an AR Experience with Metal](displaying-an-ar-experience-with-metal.md): Control rendering of your app’s virtual content on top of a camera feed.
- [ARSession](arsession.md): Deprecated. The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.
- [Configuration Objects](configuration-objects.md): Configure your augmented reality session to detect and track specific types of content.

### Views

- [ARSCNView](arscnview.md): Deprecated. A view that blends virtual 3D content from SceneKit into your augmented reality experience.
- [ARSKView](arskview.md): Deprecated. A view that blends virtual 2D content from SpriteKit into the 3D space of an augmented reality experience.
- [ARCoachingOverlayView](arcoachingoverlayview.md): Deprecated. A view that displays standardized onboarding instructions to direct users toward a specific goal.

### Virtual Content

- [Content Anchors](content-anchors.md): Identify items in the physical environment, including planar surfaces, images, physical objects, body positions, and faces.
- [Environmental Analysis](environmental-analysis.md): Analyze the video from the cameras and the accompanying data, and use ray-casting and depth-map information to determine the location of items.
- [Camera, Lighting, and Effects](camera-lighting-and-effects.md): Determine the camera position and lighting for the current session, and apply effects, such as occlusion, to elements of the environment.
- [Data Management](data-management.md): Obtain detailed information about skeletal and face geometry, and saved world data.
- [Creating USD files for Apple devices](../usd/creating-usd-files-for-apple-devices.md): Generate 3D assets that render as expected.

### AR Quick Look

Add an AR experience to your app or website, or customize your content’s appearance in Quick Look.

- [Previewing a Model with AR Quick Look](previewing-a-model-with-ar-quick-look.md): Display a model or scene that the user can move, scale, and share with others.
- [Adding Visual Effects in AR Quick Look and RealityKit](adding-visual-effects-in-ar-quick-look-and-realitykit.md): Balance the appearance and performance of your AR experiences with modeling strategies.
- [Adding an Apple Pay Button or a Custom Action in AR Quick Look](adding-an-apple-pay-button-or-a-custom-action-in-ar-quick-look.md): Provide a banner that users can tap to make a purchase or perform a custom action in an AR experience.
- [ARQuickLookPreviewItem](../quicklook/arquicklookpreviewitem.md)
- [OpenUSD schemas for AR](../usd/usd-schemas-for-ar.md): Add augmented reality functionality to your 3D content using USD schemas.
- [Specifying a lighting environment in AR Quick Look](specifying-a-lighting-environment-in-ar-quick-look.md): Add metadata to your USDZ file to specify its lighting characteristics.

### Shared Experiences

Communicate with other devices to create a shared AR experience.

- [Streaming an AR experience](streaming-an-ar-experience.md): Control an AR experience remotely by transferring sensor and user input over the network.
- [Creating a collaborative session](creating-a-collaborative-session.md): Enable nearby devices to share an AR experience by using a peer-to-peer multiuser strategy.
- [Creating a multiuser AR experience](creating-a-multiuser-ar-experience.md): Enable nearby devices to share an AR experience by using a host-guest multiuser strategy.
- [ARParticipantAnchor](arparticipantanchor.md): An anchor for another user in multiuser augmented reality experiences.
- [ARCollaborationData](arsession/collaborationdata.md): An object that holds information that a user has collected about the physical environment.

### Audio

- [Creating an immersive ar experience with audio](creating-an-immersive-ar-experience-with-audio.md): Use sound effects and environmental sound layers to create an engaging AR experience.

### Errors

- [ARErrorCode](arerror/code.md): Codes that identify errors in ARKit.

## See Also

### iOS

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md): Check whether your app can use ARKit and respect user privacy at runtime.
- [ARSession](arsession.md): Deprecated. The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.
- [ARAnchor](aranchor.md): An object that specifies the position and orientation of an item in the physical environment.
