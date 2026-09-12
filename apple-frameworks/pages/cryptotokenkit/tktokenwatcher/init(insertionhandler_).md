> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenwatcher/init(insertionhandler:)](https://developer.apple.com/documentation/cryptotokenkit/tktokenwatcher/init(insertionhandler:))

# init(insertionHandler:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Initializes a token watcher with the specified insertion handler.

> Use [init()](init%28%29.md) followed by a call to [setInsertionHandler(\_:)](setinsertionhandler%28__%29.md) instead.

## Declaration

```swift
init(insertionHandler: @escaping (String) -> Void)
```

## Parameters

- `insertionHandler`: A block to be called each time a token is added. This block takes a single argument:

  - **tokenID**: The identifier of the added token.

<a id="return-value"></a>

## Return Value

A new token watcher object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating Token Watchers

- [init()](init%28%29.md): Initializes a token watcher.

# initWithInsertionHandler: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 11.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 4.0)

Initializes a token watcher with the specified insertion handler.

> Use [init](init%28%29.md) followed by a call to [setInsertionHandler:](setinsertionhandler%28__%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithInsertionHandler:(void (^)(NSString *tokenID)) insertionHandler;
```

## Parameters

- `insertionHandler`: A block to be called each time a token is added. This block takes a single argument:

  - **tokenID**: The identifier of the added token.

<a id="return-value"></a>

## Return Value

A new token watcher object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating Token Watchers

- [init](init%28%29.md): Initializes a token watcher.
