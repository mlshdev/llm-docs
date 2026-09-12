> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroltexteditingdelegate/control(_:didfailtoformatstring:errordescription:)](https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/control(_:didfailtoformatstring:errordescription:))

# control(\_:didFailToFormatString:errorDescription:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the formatter for the cell belonging to the specified control cannot convert a string to an underlying object.

## Declaration

```swift
@MainActor optional func control(_ control: NSControl, didFailToFormatString string: String, errorDescription error: String?) -> Bool
```

## Parameters

- `control`: The control whose cell could not convert the string.
- `string`: The string that could not be converted.
- `error`: A localized, user-presentable string that explains why the conversion failed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value in the string parameter should be accepted as is; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the value in the parameter should be rejected.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should evaluate the error or query the user an appropriate value indicating whether the string should be accepted or rejected.

## See Also

### Related Documentation

- [getObjectValue(\_:for:errorDescription:)](https://developer.apple.com/documentation/foundation/formatter/getobjectvalue%28_:for:errordescription:%29): The default implementation of this method raises an exception.

# control:didFailToFormatString:errorDescription: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the formatter for the cell belonging to the specified control cannot convert a string to an underlying object.

## Declaration

```objectivec
- (BOOL) control:(NSControl *) control didFailToFormatString:(NSString *) string errorDescription:(NSString *) error;
```

## Parameters

- `control`: The control whose cell could not convert the string.
- `string`: The string that could not be converted.
- `error`: A localized, user-presentable string that explains why the conversion failed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value in the string parameter should be accepted as is; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the value in the parameter should be rejected.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should evaluate the error or query the user an appropriate value indicating whether the string should be accepted or rejected.

## See Also

### Related Documentation

- [getObjectValue:forString:errorDescription:](https://developer.apple.com/documentation/foundation/formatter/getobjectvalue%28_:for:errordescription:%29): The default implementation of this method raises an exception.
