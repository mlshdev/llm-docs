> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewcontroller/didreceivememorywarning()

# didReceiveMemoryWarning() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sent to the view controller when the app receives a memory warning.

## Declaration

```swift
func didReceiveMemoryWarning()
```

## Mentioned In

- [Responding to memory warnings](../responding-to-memory-warnings.md)

<a id="Discussion"></a>

## Discussion

Your app never calls this method directly. Instead, this method is called when the system determines that the amount of available memory is low.

You can override this method to release any additional memory used by your view controller. If you do, your implementation of this method must call the `super` implementation at some point.

# didReceiveMemoryWarning (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sent to the view controller when the app receives a memory warning.

## Declaration

```objectivec
- (void) didReceiveMemoryWarning;
```

## Mentioned In

- [Responding to memory warnings](../responding-to-memory-warnings.md)

<a id="Discussion"></a>

## Discussion

Your app never calls this method directly. Instead, this method is called when the system determines that the amount of available memory is low.

You can override this method to release any additional memory used by your view controller. If you do, your implementation of this method must call the `super` implementation at some point.
