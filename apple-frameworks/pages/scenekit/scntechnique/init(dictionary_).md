> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntechnique/init(dictionary:)](https://developer.apple.com/documentation/scenekit/scntechnique/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a technique from a technique definition dictionary.,

## Declaration

```swift
init?(dictionary: [String : Any])
```

## Parameters

- `dictionary`: A dictionary defining the series of rendering passes that comprise the technique.

<a id="return-value"></a>

## Return Value

A new technique object.

<a id="Discussion"></a>

## Discussion

See the class overview for details of a technique definition dictionary.

# techniqueWithDictionary: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a technique from a technique definition dictionary.,

## Declaration

```objectivec
+ (SCNTechnique *) techniqueWithDictionary:(NSDictionary<NSString *,id> *) dictionary;
```

## Parameters

- `dictionary`: A dictionary defining the series of rendering passes that comprise the technique.

<a id="return-value"></a>

## Return Value

A new technique object.

<a id="Discussion"></a>

## Discussion

See the class overview for details of a technique definition dictionary.
