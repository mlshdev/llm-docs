> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlsessiontasktransactionmetrics/response

# response (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The transaction response.

## Declaration

```swift
@NSCopying var response: URLResponse? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if an error occurred and no response was generated.

## See Also

### Accessing request and response

- [request](request.md): The transaction request.

# response (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The transaction response.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURLResponse * response;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if an error occurred and no response was generated.

## See Also

### Accessing request and response

- [request](request.md): The transaction request.
