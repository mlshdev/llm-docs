> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardsegue/identifier](https://developer.apple.com/documentation/uikit/uistoryboardsegue/identifier)

# identifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The identifier for the segue object.

## Declaration

```swift
var identifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

You assign identifiers to your segues in Interface Builder. An identifier is a string that your application uses to distinguish one segue from another. For example, if you have a source view controller that can segue to two or more different destination view controllers, you’d assign different identifiers to each segue so that the source view controller’s [prepare(for:sender:)](../uiviewcontroller/prepare%28for_sender_%29.md) method could tell them apart and prepare each segue appropriately.

## See Also

### Accessing the segue attributes

- [source](source.md): Deprecated. The source view controller for the segue.
- [destination](destination.md): Deprecated. The destination view controller for the segue.

# identifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

The identifier for the segue object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

You assign identifiers to your segues in Interface Builder. An identifier is a string that your application uses to distinguish one segue from another. For example, if you have a source view controller that can segue to two or more different destination view controllers, you’d assign different identifiers to each segue so that the source view controller’s [prepareForSegue:sender:](../uiviewcontroller/prepare%28for_sender_%29.md) method could tell them apart and prepare each segue appropriately.

## See Also

### Accessing the segue attributes

- [sourceViewController](source.md): Deprecated. The source view controller for the segue.
- [destinationViewController](destination.md): Deprecated. The destination view controller for the segue.
