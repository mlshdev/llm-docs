> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/social/slcomposeviewcontroller/isavailable(forservicetype:)

# isAvailable(forServiceType:) (Swift)

**Framework:** Social  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Returns A Boolean value that indicates whether you can send a request for a particular service type.

## Declaration

```swift
class func isAvailable(forServiceType serviceType: String!) -> Bool
```

## Parameters

- `serviceType`: The social networking service. For a list of possible values, see Service Type Constants.

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the service is accessible and whether at least one account is set up.

<a id="Discussion"></a>

## Discussion

For the account to be available, the user must be logged into the social service in the device settings.

## See Also

### Checking the Social Service Type

- [serviceType](servicetype.md): Specifies the social-networking service.

# isAvailableForServiceType: (Objective-C)

**Framework:** Social  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Returns A Boolean value that indicates whether you can send a request for a particular service type.

## Declaration

```objectivec
+ (BOOL) isAvailableForServiceType:(NSString *) serviceType;
```

## Parameters

- `serviceType`: The social networking service. For a list of possible values, see Service Type Constants.

<a id="return-value"></a>

## Return Value

Returns a Boolean value that indicates whether the service is accessible and whether at least one account is set up.

<a id="Discussion"></a>

## Discussion

For the account to be available, the user must be logged into the social service in the device settings.

## See Also

### Checking the Social Service Type

- [serviceType](servicetype.md): Specifies the social-networking service.
