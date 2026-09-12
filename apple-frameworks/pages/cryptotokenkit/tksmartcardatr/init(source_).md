> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/init(source:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/init(source:))

# init(source:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a `TKSmartCardATR` object from a provided data source.

## Declaration

```swift
init?(source: @escaping () -> Int32)
```

## Parameters

- `source`: The block providing a stream of data for an ATR.

  The block takes no arguments and returns one byte. To indicate that an error occured, the block returns `-1`.

<a id="return-value"></a>

## Return Value

A `TKSmartCardATR` object initialized with the parsed data. If the byte stream produces an error or does not contain a valid ATR, returns `nil`.

## See Also

### Creating a Smart Card ATR

- [init(bytes:)](init%28bytes_%29.md): Initializes a `TKSmartCardATR` object from a provided data object.

# initWithSource: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a `TKSmartCardATR` object from a provided data source.

## Declaration

```objectivec
- (instancetype) initWithSource:(int (^)()) source;
```

## Parameters

- `source`: The block providing a stream of data for an ATR.

  The block takes no arguments and returns one byte. To indicate that an error occured, the block returns `-1`.

<a id="return-value"></a>

## Return Value

A `TKSmartCardATR` object initialized with the parsed data. If the byte stream produces an error or does not contain a valid ATR, returns `nil`.

## See Also

### Creating a Smart Card ATR

- [initWithBytes:](init%28bytes_%29.md): Initializes a `TKSmartCardATR` object from a provided data object.
