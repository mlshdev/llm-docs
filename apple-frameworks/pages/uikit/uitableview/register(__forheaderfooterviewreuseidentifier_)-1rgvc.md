> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/register(_:forheaderfooterviewreuseidentifier:)-1rgvc](https://developer.apple.com/documentation/uikit/uitableview/register(_:forheaderfooterviewreuseidentifier:)-1rgvc)

# register(\_:forHeaderFooterViewReuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib object that contains a header or footer with the table view under a specified identifier.

## Declaration

```swift
func register(_ nib: UINib?, forHeaderFooterViewReuseIdentifier identifier: String)
```

## Parameters

- `nib`: A nib object that specifies the nib file to use to create the header or footer view. This parameter can’t be `nil`.
- `identifier`: The reuse identifier for the header or footer view. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Before dequeueing any header or footer views, call this method or the [register(\_:forHeaderFooterViewReuseIdentifier:)](register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md) method to tell the table view how to create new instances of your views. If a view of the specified type isn’t currently in a reuse queue, the table view uses the provided information to create a new one automatically.

If you previously registered a class or nib file with the same reuse identifier, the nib you specify in the `nib` parameter replaces the old entry. You may specify `nil` for `nib` if you want to unregister the nib from the specified reuse identifier.

## See Also

### Recycling section headers and footers

- [register(\_:forHeaderFooterViewReuseIdentifier:)](register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md): Registers a class to use in creating new table header or footer views.
- [dequeueReusableHeaderFooterView(withIdentifier:)](dequeuereusableheaderfooterview%28withidentifier_%29.md): Returns a reusable header or footer view after locating it by its identifier.

# registerNib:forHeaderFooterViewReuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib object that contains a header or footer with the table view under a specified identifier.

## Declaration

```objectivec
- (void) registerNib:(UINib *) nib forHeaderFooterViewReuseIdentifier:(NSString *) identifier;
```

## Parameters

- `nib`: A nib object that specifies the nib file to use to create the header or footer view. This parameter can’t be `nil`.
- `identifier`: The reuse identifier for the header or footer view. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Before dequeueing any header or footer views, call this method or the [registerClass:forHeaderFooterViewReuseIdentifier:](register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md) method to tell the table view how to create new instances of your views. If a view of the specified type isn’t currently in a reuse queue, the table view uses the provided information to create a new one automatically.

If you previously registered a class or nib file with the same reuse identifier, the nib you specify in the `nib` parameter replaces the old entry. You may specify `nil` for `nib` if you want to unregister the nib from the specified reuse identifier.

## See Also

### Recycling section headers and footers

- [registerClass:forHeaderFooterViewReuseIdentifier:](register%28__forheaderfooterviewreuseidentifier_%29-20ybb.md): Registers a class to use in creating new table header or footer views.
- [dequeueReusableHeaderFooterViewWithIdentifier:](dequeuereusableheaderfooterview%28withidentifier_%29.md): Returns a reusable header or footer view after locating it by its identifier.
