> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogramdelegate/programisopaque(_:)](https://developer.apple.com/documentation/scenekit/scnprogramdelegate/programisopaque(_:))

# programIsOpaque(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Asks the delegate whether fragments rendered by a program are opaque.

> Use the [isOpaque](../scnprogram/isopaque.md) property of the [SCNProgram](../scnprogram.md) object instead.

## Declaration

```swift
optional func programIsOpaque(_ program: SCNProgram) -> Bool
```

## Parameters

- `program`: The queried program.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all fragments rendered by the program are opaque; [false](https://developer.apple.com/documentation/swift/false) if the program renders fragments whose alpha value is less than `1.0`.

# programIsOpaque: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.10)

Asks the delegate whether fragments rendered by a program are opaque.

> Use the [opaque](../scnprogram/isopaque.md) property of the [SCNProgram](../scnprogram.md) object instead.

## Declaration

```objectivec
- (BOOL) programIsOpaque:(SCNProgram *) program;
```

## Parameters

- `program`: The queried program.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all fragments rendered by the program are opaque; [false](https://developer.apple.com/documentation/swift/false) if the program renders fragments whose alpha value is less than `1.0`.
