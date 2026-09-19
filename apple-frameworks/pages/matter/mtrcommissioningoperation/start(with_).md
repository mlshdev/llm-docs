> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrcommissioningoperation/start(with:)

# start(with:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Start commissioning with the given controller (which identifies the fabric the commissionee should be commissioned into).  The delegate will be notified if there are any failures.

## Declaration

```swift
func start(with controller: MTRDeviceController)
```

# startWithController: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Start commissioning with the given controller (which identifies the fabric the commissionee should be commissioned into).  The delegate will be notified if there are any failures.

## Declaration

```objectivec
- (void) startWithController:(MTRDeviceController *) controller;
```
