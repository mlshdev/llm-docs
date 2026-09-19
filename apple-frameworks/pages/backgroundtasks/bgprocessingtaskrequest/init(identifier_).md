> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundtasks/bgprocessingtaskrequest/init(identifier:)

# init(identifier:) (Swift)

**Framework:** Background Tasks  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Return a new processing task request for the specified identifier.

## Declaration

```swift
init(identifier: String)
```

## Parameters

- `identifier`: The string identifier of the processing task associated with the request.

# initWithIdentifier: (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Return a new processing task request for the specified identifier.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The string identifier of the processing task associated with the request.
