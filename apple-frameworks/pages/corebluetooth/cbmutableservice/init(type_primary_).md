> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutableservice/init(type:primary:)](https://developer.apple.com/documentation/corebluetooth/cbmutableservice/init(type:primary:))

# init(type:primary:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Creates a newly initialized mutable service specified by UUID and service type.

## Declaration

```swift
init(type UUID: CBUUID, primary isPrimary: Bool)
```

## Parameters

- `UUID`: A 128-bit UUID that identifies the service.
- `isPrimary`: A Boolean value that indicates whether the type of service is primary or secondary. If the value is [true](https://developer.apple.com/documentation/swift/true), the type of service is primary. If the value is [false](https://developer.apple.com/documentation/swift/false), the type of service is secondary.

<a id="return-value"></a>

## Return Value

A newly initialized mutable service.

<a id="discussion"></a>

## Discussion

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

# initWithType:primary: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Creates a newly initialized mutable service specified by UUID and service type.

## Declaration

```objectivec
- (instancetype) initWithType:(CBUUID *) UUID primary:(BOOL) isPrimary;
```

## Parameters

- `UUID`: A 128-bit UUID that identifies the service.
- `isPrimary`: A Boolean value that indicates whether the type of service is primary or secondary. If the value is [true](https://developer.apple.com/documentation/swift/true), the type of service is primary. If the value is [false](https://developer.apple.com/documentation/swift/false), the type of service is secondary.

<a id="return-value"></a>

## Return Value

A newly initialized mutable service.

<a id="discussion"></a>

## Discussion

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).
