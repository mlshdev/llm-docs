> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/host/localizedname](https://developer.apple.com/documentation/foundation/host/localizedname)

# localizedName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 27.0)

Returns the name used as by default when publishing `NSNetServices`.

## Declaration

```swift
var localizedName: String? { get }
```

<a id="return-value"></a>

## Return Value

A string containing the computer name.

<a id="Discussion"></a>

## Discussion

This is the name displayed in the Finder sidebar, as well as in the Sharing preference panel.

This method only returns an `NSString` when sent to the [current()](current%28%29.md) instance, all other instances currently return `nil`.

This property is key-value observable.

## See Also

### Getting Host Information

- [address](address.md): Deprecated. Returns one of the network addresses of the receiver.
- [addresses](addresses.md): Deprecated. Returns all the network addresses of the receiver.
- [name](name.md): Deprecated. Returns one of the hostnames of the receiver.
- [names](names.md): Deprecated. Returns all the hostnames of the receiver.

# localizedName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 27.0)

Returns the name used as by default when publishing `NSNetServices`.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * localizedName;
```

<a id="return-value"></a>

## Return Value

A string containing the computer name.

<a id="Discussion"></a>

## Discussion

This is the name displayed in the Finder sidebar, as well as in the Sharing preference panel.

This method only returns an `NSString` when sent to the [currentHost](current%28%29.md) instance, all other instances currently return `nil`.

This property is key-value observable.

## See Also

### Getting Host Information

- [address](address.md): Deprecated. Returns one of the network addresses of the receiver.
- [addresses](addresses.md): Deprecated. Returns all the network addresses of the receiver.
- [name](name.md): Deprecated. Returns one of the hostnames of the receiver.
- [names](names.md): Deprecated. Returns all the hostnames of the receiver.
