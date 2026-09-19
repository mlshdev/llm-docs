> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tktokensession/init(token:)

# init(token:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a token session with the specified token.

## Declaration

```swift
init(token: TKToken)
```

## Parameters

- `token`: The token to which the initialized session is bound.

<a id="return-value"></a>

## Return Value

A new token session created with the specified token.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

# initWithToken: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a token session with the specified token.

## Declaration

```objectivec
- (instancetype) initWithToken:(TKToken *) token;
```

## Parameters

- `token`: The token to which the initialized session is bound.

<a id="return-value"></a>

## Return Value

A new token session created with the specified token.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.
