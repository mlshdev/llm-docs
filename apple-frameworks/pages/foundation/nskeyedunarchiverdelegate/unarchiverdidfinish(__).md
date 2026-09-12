> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiverdelegate/unarchiverdidfinish(_:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiverdelegate/unarchiverdidfinish(_:))

# unarchiverDidFinish(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies the delegate that decoding has finished.

## Declaration

```swift
optional func unarchiverDidFinish(_ unarchiver: NSKeyedUnarchiver)
```

## Parameters

- `unarchiver`: An unarchiver for which the receiver is the delegate.

## See Also

### Finishing Decoding

- [unarchiverWillFinish(\_:)](unarchiverwillfinish%28__%29.md): Notifies the delegate that decoding is about to finish.

# unarchiverDidFinish: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies the delegate that decoding has finished.

## Declaration

```objectivec
- (void) unarchiverDidFinish:(NSKeyedUnarchiver *) unarchiver;
```

## Parameters

- `unarchiver`: An unarchiver for which the receiver is the delegate.

## See Also

### Finishing Decoding

- [unarchiverWillFinish:](unarchiverwillfinish%28__%29.md): Notifies the delegate that decoding is about to finish.
