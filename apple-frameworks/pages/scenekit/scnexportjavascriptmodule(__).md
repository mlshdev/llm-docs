> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnexportjavascriptmodule(_:)](https://developer.apple.com/documentation/scenekit/scnexportjavascriptmodule(_:))

# SCNExportJavaScriptModule(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Makes SceneKit classes and global constants available to the specified JavaScript context.

## Declaration

```swift
func SCNExportJavaScriptModule(_ context: JSContext)
```

<a id="Discussion"></a>

## Discussion

By controlling SceneKit using JavaScript code supplied at run time, you can enable rapid development for parts of your game or app. For example, a designer can easily experiment with visual effects or game-character behaviors without needing to compile and deploy your complete Xcode project.

This function exports all SceneKit classes and global constants, and all methods and properties on those classes, to JavaScript using the rules defined in the [JSExport](../javascriptcore/jsexport.md) protocol. For example, the JavaScript code below performs various operations on a SceneKit node:

```javascript
var aNode = SCNNode.node();
aNode.opacity = 0.5;
aNode.removeFromParentNode();
// Animate an opacity change.
SCNTransaction.begin();
SCNTransaction.setAnimationDuration(1.0);
aNode.opacity = 0.5;
SCNTransaction.commit();
```

For SceneKit APIs that involve vectors and matrices, use JavaScript object syntax to define those values in terms of their elements:

```javascript
aNode.scale = {x:2, y:2, z:2};
aNode.transform = {m11:1, m12:0, m13:0, /*...*/ m44:1};
```

SceneKit also exports the following special JavaScript objects and functions:

| Objective-C / Swift class | JavaScript constructor |
| --- | --- |
| [NSColor](https://developer.apple.com/documentation/appkit/nscolor) / [UIColor](../uikit/uicolor.md) | `SCNColor.color(r,g,b,a)` |
| [NSImage](https://developer.apple.com/documentation/appkit/nsimage) / [UIImage](../uikit/uiimage.md) | `SCNImage.imageWithURL(aURL)` |
|  | `SCNImage.imageWithPath(aPath)` |
| [CABasicAnimation](../quartzcore/cabasicanimation.md) | `CABasicAnimation.animationWithKeyPath(aPath)` |
| [CAKeyframeAnimation](../quartzcore/cakeyframeanimation.md) | `CAKeyframeAnimation.animationWithKeyPath(aPath)` |
| [CAAnimationGroup](../quartzcore/caanimationgroup.md) | `new CAAnimationGroup()` |
| [CAMediaTimingFunction](../quartzcore/camediatimingfunction.md) | `CAMediaTimingFunction.functionWithName(name)` |

# SCNExportJavaScriptModule (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Makes SceneKit classes and global constants available to the specified JavaScript context.

## Declaration

```objectivec
extern void SCNExportJavaScriptModule(JSContext *context);
```

<a id="Discussion"></a>

## Discussion

By controlling SceneKit using JavaScript code supplied at run time, you can enable rapid development for parts of your game or app. For example, a designer can easily experiment with visual effects or game-character behaviors without needing to compile and deploy your complete Xcode project.

This function exports all SceneKit classes and global constants, and all methods and properties on those classes, to JavaScript using the rules defined in the [JSExport](../javascriptcore/jsexport.md) protocol. For example, the JavaScript code below performs various operations on a SceneKit node:

```javascript
var aNode = SCNNode.node();
aNode.opacity = 0.5;
aNode.removeFromParentNode();
// Animate an opacity change.
SCNTransaction.begin();
SCNTransaction.setAnimationDuration(1.0);
aNode.opacity = 0.5;
SCNTransaction.commit();
```

For SceneKit APIs that involve vectors and matrices, use JavaScript object syntax to define those values in terms of their elements:

```javascript
aNode.scale = {x:2, y:2, z:2};
aNode.transform = {m11:1, m12:0, m13:0, /*...*/ m44:1};
```

SceneKit also exports the following special JavaScript objects and functions:

| Objective-C / Swift class | JavaScript constructor |
| --- | --- |
| [NSColor](https://developer.apple.com/documentation/appkit/nscolor) / [UIColor](../uikit/uicolor.md) | `SCNColor.color(r,g,b,a)` |
| [NSImage](https://developer.apple.com/documentation/appkit/nsimage) / [UIImage](../uikit/uiimage.md) | `SCNImage.imageWithURL(aURL)` |
|  | `SCNImage.imageWithPath(aPath)` |
| [CABasicAnimation](../quartzcore/cabasicanimation.md) | `CABasicAnimation.animationWithKeyPath(aPath)` |
| [CAKeyframeAnimation](../quartzcore/cakeyframeanimation.md) | `CAKeyframeAnimation.animationWithKeyPath(aPath)` |
| [CAAnimationGroup](../quartzcore/caanimationgroup.md) | `new CAAnimationGroup()` |
| [CAMediaTimingFunction](../quartzcore/camediatimingfunction.md) | `CAMediaTimingFunction.functionWithName(name)` |
