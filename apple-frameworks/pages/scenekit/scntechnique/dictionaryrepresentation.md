> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntechnique/dictionaryrepresentation](https://developer.apple.com/documentation/scenekit/scntechnique/dictionaryrepresentation)

# dictionaryRepresentation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The dictionary defining the rendering technique.

## Declaration

```swift
var dictionaryRepresentation: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

Read this property when you want to save a property list file containing the definition of a technique.

See the class overview for details of a technique definition dictionary.

# dictionaryRepresentation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The dictionary defining the rendering technique.

## Declaration

```objectivec
@property (readonly) NSDictionary<NSString *,id> * dictionaryRepresentation;
```

<a id="Discussion"></a>

## Discussion

Read this property when you want to save a property list file containing the definition of a technique.

See the class overview for details of a technique definition dictionary.
