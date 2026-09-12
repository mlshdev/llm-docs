> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/canperform(withitems:)](https://developer.apple.com/documentation/appkit/nssharingservice/canperform(withitems:))

# canPerform(withItems:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns whether the service can share all the specified items.

## Declaration

```swift
func canPerform(withItems items: [Any]?) -> Bool
```

## Parameters

- `items`: The items to share.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the service can share all the items; [false](https://developer.apple.com/documentation/swift/false) otherwise. If `items` is `nil`, the method will return [true](https://developer.apple.com/documentation/swift/true) when the service is configured.

<a id="Discussion"></a>

## Discussion

This method can be used to validate a custom user interface such as a dedicated Twitter button.  Therefore you could call it once at launch time with `nil` items to check whether to display the button or not, and then with real items to enable and disable the button depending on the context or selection.

## See Also

### Related Documentation

- [perform(withItems:)](perform%28withitems_%29.md): Manually performs the service on the provided items.

### Querying Service Availability

- [sharingServices(forItems:)](sharingservices%28foritems_%29.md): Deprecated. Returns a list of sharing services which could share all the provided items together.

# canPerformWithItems: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns whether the service can share all the specified items.

## Declaration

```objectivec
- (BOOL) canPerformWithItems:(NSArray *) items;
```

## Parameters

- `items`: The items to share.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the service can share all the items; [false](https://developer.apple.com/documentation/swift/false) otherwise. If `items` is `nil`, the method will return [true](https://developer.apple.com/documentation/swift/true) when the service is configured.

<a id="Discussion"></a>

## Discussion

This method can be used to validate a custom user interface such as a dedicated Twitter button.  Therefore you could call it once at launch time with `nil` items to check whether to display the button or not, and then with real items to enable and disable the button depending on the context or selection.

## See Also

### Related Documentation

- [performWithItems:](perform%28withitems_%29.md): Manually performs the service on the provided items.

### Querying Service Availability

- [sharingServicesForItems:](sharingservices%28foritems_%29.md): Deprecated. Returns a list of sharing services which could share all the provided items together.
