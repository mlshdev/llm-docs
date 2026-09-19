> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/adsupport/asidentifiermanager/shared()

# shared() (Swift)

**Framework:** AdSupport  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 6.0+

The shared instance of the identifier manager class.

## Declaration

```swift
class func shared() -> ASIdentifierManager
```

<a id="return-value"></a>

## Return Value

Returns the shared instance of the AdSupport identifier manager class.

## See Also

### Getting the Advertising Identifier

- [advertisingIdentifier](advertisingidentifier.md): The UUID that is specific to a device.

# sharedManager (Objective-C)

**Framework:** AdSupport  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 6.0+

The shared instance of the identifier manager class.

## Declaration

```objectivec
+ (ASIdentifierManager *) sharedManager;
```

<a id="return-value"></a>

## Return Value

Returns the shared instance of the AdSupport identifier manager class.

## See Also

### Getting the Advertising Identifier

- [advertisingIdentifier](advertisingidentifier.md): The UUID that is specific to a device.
