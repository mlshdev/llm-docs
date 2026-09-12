> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/interfacenames()](https://developer.apple.com/documentation/corewlan/cwinterface/interfacenames())

# interfaceNames() (Swift)

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.6+ (deprecated in 10.10)

Returns the list of BSD names for WLAN interfaces available on the current system.

> Use the [CWWiFiClient](../cwwificlient.md) method [interfaceNames()](../cwwificlient/interfacenames%28%29-swift.type.method.md) instead.

## Declaration

```swift
class func interfaceNames() -> Set<String>?
```

<a id="return-value"></a>

## Return Value

An NSSet object containing NSString objects representing BSD interface names.

<a id="Discussion"></a>

## Discussion

Returns an NSArray of NSString objects representing the supported WLAN BSD interface names avaliable on the current system (i.e. “en1”, “en2”). If there are no supported interfaces for the current system, then this method will return an empty NSArray object. Returns *nil* in the case of an error.

# interfaceNames (Objective-C)

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.6+ (deprecated in 10.10)

Returns the list of BSD names for WLAN interfaces available on the current system.

> Use the [CWWiFiClient](../cwwificlient.md) method [interfaceNames](../cwwificlient/interfacenames%28%29-swift.type.method.md) instead.

## Declaration

```objectivec
+ (NSSet<NSString *> *) interfaceNames;
```

<a id="return-value"></a>

## Return Value

An NSSet object containing NSString objects representing BSD interface names.

<a id="Discussion"></a>

## Discussion

Returns an NSArray of NSString objects representing the supported WLAN BSD interface names avaliable on the current system (i.e. “en1”, “en2”). If there are no supported interfaces for the current system, then this method will return an empty NSArray object. Returns *nil* in the case of an error.
