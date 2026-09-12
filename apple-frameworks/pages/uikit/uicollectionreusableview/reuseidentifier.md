> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionreusableview/reuseidentifier](https://developer.apple.com/documentation/uikit/uicollectionreusableview/reuseidentifier)

# reuseIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string that identifies the purpose of the view.

## Declaration

```swift
var reuseIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

The collection view identifies and queues reusable views using their reuse identifiers. The collection view sets this value when it first creates the view, and the value cannot be changed later. When your data source is prompted to provide a given view, it can use the reuse identifier to dequeue a view of the appropriate type.

## See Also

### Reusing cells

- [prepareForReuse()](prepareforreuse%28%29.md): Performs any clean up necessary to prepare the view for use again.

# reuseIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string that identifies the purpose of the view.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * reuseIdentifier;
```

<a id="Discussion"></a>

## Discussion

The collection view identifies and queues reusable views using their reuse identifiers. The collection view sets this value when it first creates the view, and the value cannot be changed later. When your data source is prompted to provide a given view, it can use the reuse identifier to dequeue a view of the appropriate type.

## See Also

### Reusing cells

- [prepareForReuse](prepareforreuse%28%29.md): Performs any clean up necessary to prepare the view for use again.
