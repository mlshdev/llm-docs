> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/resume()](https://developer.apple.com/documentation/matter/mtrdevicecontroller/resume())

# resume() (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Resume the controller.  This has no effect if the controller is not suspended.

## Declaration

```swift
func resume()
```

<a id="discussion"></a>

## Discussion

A resume following any number of suspend calls will resume the controller; there does not need to be a resume call to match every suspend call.

# resume (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Resume the controller.  This has no effect if the controller is not suspended.

## Declaration

```objectivec
- (void) resume;
```

<a id="discussion"></a>

## Discussion

A resume following any number of suspend calls will resume the controller; there does not need to be a resume call to match every suspend call.
