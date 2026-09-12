> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/scaling-a-scene-s-content-to-fit-the-view](https://developer.apple.com/documentation/spritekit/scaling-a-scene-s-content-to-fit-the-view)

# Scaling a Scene’s Content to Fit the View (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Configure the scale mode to determine how a scene is sized to fit its view.

<a id="overview"></a>

## Overview

Set the scene’s [scaleMode](skscene/scalemode.md) property to determine how it’s sized according to the view that’s displaying it. For example, in iOS, `scaleMode` determines the automatic resizing of your scene when the device changes orientation. In macOS, `scaleMode` affects how your scene is scaled when the user changes the size or proportions of your app’s window.

<a id="Decide-Which-Scale-Mode-Is-Best"></a>

### Decide Which Scale Mode Is Best

When you design your game, you should decide on a strategy for handling the scene’s `size` and [scaleMode](skscene/scalemode.md) properties. Here are the most common strategies:

- Instantiate the scene with a constant size and never change it. Pick a scaling mode that lets the view scale the scene’s content. This gives the scene a predictable coordinate system and frame. You can then base your art assets and gameplay logic on this coordinate system.
- Adjust the size of the scene in your game. Where necessary, adjust your game logic and art assets to match the scene’s size.
- Set the [scaleMode](skscene/scalemode.md) property to [SKSceneScaleMode.resizeFill](skscenescalemode/resizefill.md). SpriteKit automatically resizes the scene so that it always matches the view’s size. Where necessary, adjust your game logic and art assets to match the scene’s size.

<a id="Set-a-Fixed-Aspect-Ratio"></a>

### Set a Fixed Aspect Ratio

Listing 1 shows a typical implementation for when you plan to use a constant-sized scene. This code specifies a method to be executed the first time that the scene is presented. It configures the scene’s properties, including its scaling mode, then adds content. In this example, the scale mode is set to [SKSceneScaleMode.aspectFit](skscenescalemode/aspectfit.md), which scales the contents equally in both dimensions and ensures that all of the scene’s contents are visible. Where necessary, this mode adds letter-boxing.

Listing 1. Creating a constant-sized scene

**Swift**

```swift
func createSceneContent() {
    scene.scaleMode = .aspectFit
    scene.backgroundColor = .black
    // Add additional scene contents here.  
   ...
}
```

**Obj-C**

```objc
- (void)createSceneContent  
{      
    self.scaleMode = SKSceneScaleModeAspectFit;      
    self.backgroundColor = [SKColor blackColor];  
    // Add additional scene contents here.  
    ...
}
```

<a id="Update-Your-Graphics-on-Scene-Resize"></a>

### Update Your Graphics on Scene Resize

If you expect a scene’s size to change at runtime, then the initial scene size should be used to determine which art assets to use, as well as any game logic that is dependent on the scene size. Your game should also override the scene’s [didChangeSize(\_:)](skscene/didchangesize%28__%29.md) method, which is called whenever the scene changes size. When this method is called, you should update the scene’s contents to match the new size.

## See Also

### Stretching Content to Fit the View

- [scaleMode](skscene/scalemode.md): A setting that defines how the scene is mapped to the view that presents it.
- [SKSceneScaleMode](skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.

# Scaling a Scene’s Content to Fit the View (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Configure the scale mode to determine how a scene is sized to fit its view.

<a id="overview"></a>

## Overview

Set the scene’s [scaleMode](skscene/scalemode.md) property to determine how it’s sized according to the view that’s displaying it. For example, in iOS, `scaleMode` determines the automatic resizing of your scene when the device changes orientation. In macOS, `scaleMode` affects how your scene is scaled when the user changes the size or proportions of your app’s window.

<a id="Decide-Which-Scale-Mode-Is-Best"></a>

### Decide Which Scale Mode Is Best

When you design your game, you should decide on a strategy for handling the scene’s `size` and [scaleMode](skscene/scalemode.md) properties. Here are the most common strategies:

- Instantiate the scene with a constant size and never change it. Pick a scaling mode that lets the view scale the scene’s content. This gives the scene a predictable coordinate system and frame. You can then base your art assets and gameplay logic on this coordinate system.
- Adjust the size of the scene in your game. Where necessary, adjust your game logic and art assets to match the scene’s size.
- Set the [scaleMode](skscene/scalemode.md) property to [SKSceneScaleModeResizeFill](skscenescalemode/resizefill.md). SpriteKit automatically resizes the scene so that it always matches the view’s size. Where necessary, adjust your game logic and art assets to match the scene’s size.

<a id="Set-a-Fixed-Aspect-Ratio"></a>

### Set a Fixed Aspect Ratio

Listing 1 shows a typical implementation for when you plan to use a constant-sized scene. This code specifies a method to be executed the first time that the scene is presented. It configures the scene’s properties, including its scaling mode, then adds content. In this example, the scale mode is set to [SKSceneScaleModeAspectFit](skscenescalemode/aspectfit.md), which scales the contents equally in both dimensions and ensures that all of the scene’s contents are visible. Where necessary, this mode adds letter-boxing.

Listing 1. Creating a constant-sized scene

**Swift**

```swift
func createSceneContent() {
    scene.scaleMode = .aspectFit
    scene.backgroundColor = .black
    // Add additional scene contents here.  
   ...
}
```

**Obj-C**

```objc
- (void)createSceneContent  
{      
    self.scaleMode = SKSceneScaleModeAspectFit;      
    self.backgroundColor = [SKColor blackColor];  
    // Add additional scene contents here.  
    ...
}
```

<a id="Update-Your-Graphics-on-Scene-Resize"></a>

### Update Your Graphics on Scene Resize

If you expect a scene’s size to change at runtime, then the initial scene size should be used to determine which art assets to use, as well as any game logic that is dependent on the scene size. Your game should also override the scene’s [didChangeSize:](skscene/didchangesize%28__%29.md) method, which is called whenever the scene changes size. When this method is called, you should update the scene’s contents to match the new size.

## See Also

### Stretching Content to Fit the View

- [scaleMode](skscene/scalemode.md): A setting that defines how the scene is mapped to the view that presents it.
- [SKSceneScaleMode](skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.
