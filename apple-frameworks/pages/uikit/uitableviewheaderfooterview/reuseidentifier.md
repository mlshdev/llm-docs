> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/reuseidentifier](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/reuseidentifier)

# reuseIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string used to identify a reusable header or footer.

## Declaration

```swift
var reuseIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

You assign a reuse identifier to a header or footer view at creation time. Once assigned, the table view uses that reuse identifier to gather your views when they’re scrolled offscreen and queue them for later reuse. You can retrieve header or footer views by passing the same reuse identifier to the [dequeueReusableHeaderFooterView(withIdentifier:)](../uitableview/dequeuereusableheaderfooterview%28withidentifier_%29.md) method of the table view.

## See Also

### Managing view reuse

- [prepareForReuse()](prepareforreuse%28%29.md): Prepares a reusable header or footer view for reuse by the table.

# reuseIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string used to identify a reusable header or footer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * reuseIdentifier;
```

<a id="Discussion"></a>

## Discussion

You assign a reuse identifier to a header or footer view at creation time. Once assigned, the table view uses that reuse identifier to gather your views when they’re scrolled offscreen and queue them for later reuse. You can retrieve header or footer views by passing the same reuse identifier to the [dequeueReusableHeaderFooterViewWithIdentifier:](../uitableview/dequeuereusableheaderfooterview%28withidentifier_%29.md) method of the table view.

## See Also

### Managing view reuse

- [prepareForReuse](prepareforreuse%28%29.md): Prepares a reusable header or footer view for reuse by the table.
