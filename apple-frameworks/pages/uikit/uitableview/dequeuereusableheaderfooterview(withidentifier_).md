> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/dequeuereusableheaderfooterview(withidentifier:)](https://developer.apple.com/documentation/uikit/uitableview/dequeuereusableheaderfooterview(withidentifier:))

# dequeueReusableHeaderFooterView(withIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a reusable header or footer view after locating it by its identifier.

## Declaration

```swift
func dequeueReusableHeaderFooterView(withIdentifier identifier: String) -> UITableViewHeaderFooterView?
```

## Parameters

- `identifier`: A string identifying the header or footer view to be reused. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md) object with the associated identifier or `nil` if no such object exists in the reusable view queue.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

For performance reasons, a table view’s delegate should generally reuse [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md) objects when it’s asked to provide them. A table view maintains a queue or list of [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md) objects that the table view’s delegate has marked for reuse. It marks a view for reuse by assigning it a reuse identifier when it creates it (in the [init(reuseIdentifier:)](../uitableviewheaderfooterview/init%28reuseidentifier_%29.md) method of [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md)).

You can use this method to access specific template header and footer views that you previously created. You can access a view’s reuse identifier through its [reuseIdentifier](../uitableviewheaderfooterview/reuseidentifier.md) property.

## See Also

### Recycling section headers and footers

- [register(\_:forHeaderFooterViewReuseIdentifier:)](register%28__forheaderfooterviewreuseidentifier_%29-1rgvc.md): Deprecated. Registers a nib object that contains a header or footer with the table view under a specified identifier.
- [register(\_:forHeaderFooterViewReuseIdentifier:)](register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md): Registers a class to use in creating new table header or footer views.

# dequeueReusableHeaderFooterViewWithIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a reusable header or footer view after locating it by its identifier.

## Declaration

```objectivec
- (UITableViewHeaderFooterView *) dequeueReusableHeaderFooterViewWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A string identifying the header or footer view to be reused. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md) object with the associated identifier or `nil` if no such object exists in the reusable view queue.

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

For performance reasons, a table view’s delegate should generally reuse [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md) objects when it’s asked to provide them. A table view maintains a queue or list of [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md) objects that the table view’s delegate has marked for reuse. It marks a view for reuse by assigning it a reuse identifier when it creates it (in the [initWithReuseIdentifier:](../uitableviewheaderfooterview/init%28reuseidentifier_%29.md) method of [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md)).

You can use this method to access specific template header and footer views that you previously created. You can access a view’s reuse identifier through its [reuseIdentifier](../uitableviewheaderfooterview/reuseidentifier.md) property.

## See Also

### Recycling section headers and footers

- [registerNib:forHeaderFooterViewReuseIdentifier:](register%28__forheaderfooterviewreuseidentifier_%29-1rgvc.md): Deprecated. Registers a nib object that contains a header or footer with the table view under a specified identifier.
- [registerClass:forHeaderFooterViewReuseIdentifier:](register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md): Registers a class to use in creating new table header or footer views.
