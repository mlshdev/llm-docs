> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntechnique/init(bysequencingtechniques:)](https://developer.apple.com/documentation/scenekit/scntechnique/init(bysequencingtechniques:))

# init(bySequencingTechniques:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a new rendering technique that combines a series of techniques.

## Declaration

```swift
init?(bySequencingTechniques techniques: [SCNTechnique])
```

## Parameters

- `techniques`: An array of [SCNTechnique](../scntechnique.md) objects.

<a id="return-value"></a>

## Return Value

A new technique object.

<a id="Discussion"></a>

## Discussion

The new technique applies the effects of the techniques in the order specified in the `techniques` array. Each output of a technique in the array becomes an input to the next technique in the array.

# techniqueBySequencingTechniques: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a new rendering technique that combines a series of techniques.

## Declaration

```objectivec
+ (SCNTechnique *) techniqueBySequencingTechniques:(NSArray<SCNTechnique *> *) techniques;
```

## Parameters

- `techniques`: An array of [SCNTechnique](../scntechnique.md) objects.

<a id="return-value"></a>

## Return Value

A new technique object.

<a id="Discussion"></a>

## Discussion

The new technique applies the effects of the techniques in the order specified in the `techniques` array. Each output of a technique in the array becomes an input to the next technique in the array.
