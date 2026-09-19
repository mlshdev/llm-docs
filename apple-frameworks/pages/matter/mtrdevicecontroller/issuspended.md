> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontroller/issuspended

# isSuspended (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

If true, the controller has been suspended via `suspend` and not resumed yet.

## Declaration

```swift
var isSuspended: Bool { get }
```

# suspended (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

If true, the controller has been suspended via `suspend` and not resumed yet.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSuspended) BOOL suspended;
```
