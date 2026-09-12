> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiverdelegate/unarchiverwillfinish(_:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiverdelegate/unarchiverwillfinish(_:))

# unarchiverWillFinish(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies the delegate that decoding is about to finish.

## Declaration

```swift
optional func unarchiverWillFinish(_ unarchiver: NSKeyedUnarchiver)
```

## Parameters

- `unarchiver`: An unarchiver for which the receiver is the delegate.

## See Also

### Finishing Decoding

- [unarchiverDidFinish(\_:)](unarchiverdidfinish%28__%29.md): Notifies the delegate that decoding has finished.

# unarchiverWillFinish: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies the delegate that decoding is about to finish.

## Declaration

```objectivec
- (void) unarchiverWillFinish:(NSKeyedUnarchiver *) unarchiver;
```

## Parameters

- `unarchiver`: An unarchiver for which the receiver is the delegate.

## See Also

### Finishing Decoding

- [unarchiverDidFinish:](unarchiverdidfinish%28__%29.md): Notifies the delegate that decoding has finished.
