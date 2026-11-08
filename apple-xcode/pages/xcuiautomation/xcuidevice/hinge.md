> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xcuiautomation/xcuidevice/hinge

# hinge (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The device’s hinge, if it has one.

## Declaration

```swift
nonisolated var hinge: XCUIHinge? { get }
```

<a id="discussion"></a>

## Discussion

This property is `nil` on devices that do not have a hinge.

# hinge (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The device’s hinge, if it has one.

## Declaration

```objectivec
@property (strong, readonly, nullable) XCUIHinge * hinge;
```

<a id="discussion"></a>

## Discussion

This property is `nil` on devices that do not have a hinge.
