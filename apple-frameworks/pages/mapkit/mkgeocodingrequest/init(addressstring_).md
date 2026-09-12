> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeocodingrequest/init(addressstring:)](https://developer.apple.com/documentation/mapkit/mkgeocodingrequest/init(addressstring:))

# init(addressString:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Initializes a new geocoder request object with the provided address string.

## Declaration

```swift
init?(addressString: String)
```

## Parameters

- `addressString`: An address string.

<a id="return-value"></a>

## Return Value

An initialized geocoder, or `nil` if the provided `addressString` is empty.

# initWithAddressString: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Initializes a new geocoder request object with the provided address string.

## Declaration

```objectivec
- (instancetype) initWithAddressString:(NSString *) addressString;
```

## Parameters

- `addressString`: An address string.

<a id="return-value"></a>

## Return Value

An initialized geocoder, or `nil` if the provided `addressString` is empty.
