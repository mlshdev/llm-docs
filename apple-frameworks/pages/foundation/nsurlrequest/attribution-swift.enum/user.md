> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsurlrequest/attribution-swift.enum/user

# NSURLRequest.Attribution.user (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The user explicitly directs the app to make a network request.

## Declaration

```swift
case user
```

<a id="Discussion"></a>

## Discussion

Use this value for the [attribution](../../urlrequest/attribution-swift.property.md) parameter of a URL request that satisfies a user request to access an explicit, unmodified URL. In all other cases, use the [NSURLRequest.Attribution.developer](developer.md) value instead.

## See Also

### Request sources

- [NSURLRequest.Attribution.developer](developer.md): A developer-initiated network request.

# NSURLRequestAttributionUser (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The user explicitly directs the app to make a network request.

## Declaration

```objectivec
NSURLRequestAttributionUser
```

<a id="Discussion"></a>

## Discussion

Use this value for the [attribution](../../urlrequest/attribution-swift.property.md) parameter of a URL request that satisfies a user request to access an explicit, unmodified URL. In all other cases, use the [NSURLRequestAttributionDeveloper](developer.md) value instead.

## See Also

### Request sources

- [NSURLRequestAttributionDeveloper](developer.md): A developer-initiated network request.
