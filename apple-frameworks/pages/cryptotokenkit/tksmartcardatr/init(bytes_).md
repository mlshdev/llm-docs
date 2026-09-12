> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/init(bytes:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/init(bytes:))

# init(bytes:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a `TKSmartCardATR` object from a provided data object.

## Declaration

```swift
init?(bytes: Data)
```

## Parameters

- `bytes`: The ATR data to be parsed.

<a id="return-value"></a>

## Return Value

A `TKSmartCardATR` object initialized with the parsed data. If `bytes` does not contain a valid ATR, returns `nil`.

## See Also

### Creating a Smart Card ATR

- [init(source:)](init%28source_%29.md): Initializes a `TKSmartCardATR` object from a provided data source.

# initWithBytes: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a `TKSmartCardATR` object from a provided data object.

## Declaration

```objectivec
- (instancetype) initWithBytes:(NSData *) bytes;
```

## Parameters

- `bytes`: The ATR data to be parsed.

<a id="return-value"></a>

## Return Value

A `TKSmartCardATR` object initialized with the parsed data. If `bytes` does not contain a valid ATR, returns `nil`.

## See Also

### Creating a Smart Card ATR

- [initWithSource:](init%28source_%29.md): Initializes a `TKSmartCardATR` object from a provided data source.
