> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/httpurlresponse/value(forhttpheaderfield:)

# value(forHTTPHeaderField:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the value that corresponds to the given header field.

## Declaration

```swift
func value(forHTTPHeaderField field: String) -> String?
```

## Parameters

- `field`: The name of the header field you want to retrieve. The name is case-insensitive.

<a id="return-value"></a>

## Return Value

The value associated with the given header field, or `nil` if no value is associated with the field.

<a id="Discussion"></a>

## Discussion

In keeping with the HTTP RFC, HTTP header field names are case-insensitive.

## See Also

### Getting HTTP response headers

- [allHeaderFields](allheaderfields.md): All HTTP header fields of the response.

# valueForHTTPHeaderField: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the value that corresponds to the given header field.

## Declaration

```objectivec
- (NSString *) valueForHTTPHeaderField:(NSString *) field;
```

## Parameters

- `field`: The name of the header field you want to retrieve. The name is case-insensitive.

<a id="return-value"></a>

## Return Value

The value associated with the given header field, or `nil` if no value is associated with the field.

<a id="Discussion"></a>

## Discussion

In keeping with the HTTP RFC, HTTP header field names are case-insensitive.

## See Also

### Getting HTTP response headers

- [allHeaderFields](allheaderfields.md): All HTTP header fields of the response.
