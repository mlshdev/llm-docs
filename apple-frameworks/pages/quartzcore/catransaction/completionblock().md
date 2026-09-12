> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/completionblock()](https://developer.apple.com/documentation/quartzcore/catransaction/completionblock())

# completionBlock() (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the completion block object.

## Declaration

```swift
class func completionBlock() -> (() -> Void)?
```

<a id="Discussion"></a>

## Discussion

See [setCompletionBlock(\_:)](setcompletionblock%28__%29.md) for a description of the role of the completion block object.

## See Also

### Getting and Setting Completion Block Objects

- [setCompletionBlock(\_:)](setcompletionblock%28__%29.md): Sets the completion block object.

# completionBlock (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the completion block object.

## Declaration

```objectivec
+ (void (^)(void)) completionBlock;
```

<a id="Discussion"></a>

## Discussion

See [setCompletionBlock:](setcompletionblock%28__%29.md) for a description of the role of the completion block object.

## See Also

### Getting and Setting Completion Block Objects

- [setCompletionBlock:](setcompletionblock%28__%29.md): Sets the completion block object.
