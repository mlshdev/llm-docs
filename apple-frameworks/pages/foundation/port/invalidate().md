> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/port/invalidate()](https://developer.apple.com/documentation/foundation/port/invalidate())

# invalidate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the receiver as invalid and posts an [didBecomeInvalidNotification](didbecomeinvalidnotification.md) to the default notification center.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

You must call this method before releasing a port object (or removing strong references to it if your application is garbage collected).

## See Also

### Validation

- [isValid](isvalid.md): A Boolean value that indicates whether the receiver is valid.

# invalidate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the receiver as invalid and posts an [NSPortDidBecomeInvalidNotification](didbecomeinvalidnotification.md) to the default notification center.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

You must call this method before releasing a port object (or removing strong references to it if your application is garbage collected).

## See Also

### Validation

- [valid](isvalid.md): A Boolean value that indicates whether the receiver is valid.
