> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontroller/servicetype](https://developer.apple.com/documentation/social/slcomposeviewcontroller/servicetype)

# serviceType (Swift)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Specifies the social-networking service.

## Declaration

```swift
var serviceType: String! { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set when you initialize a social compose view controller in [init(forServiceType:)](init%28forservicetype_%29.md). Each social view controller you present is connected to only one social service at a time. Use this property to check which service your social view controller has specified. For a list of possible values, see Service Type Constants.

## See Also

### Checking the Social Service Type

- [isAvailable(forServiceType:)](isavailable%28forservicetype_%29.md): Returns A Boolean value that indicates whether you can send a request for a particular service type.

# serviceType (Objective-C)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Specifies the social-networking service.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * serviceType;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set when you initialize a social compose view controller in [composeViewControllerForServiceType:](init%28forservicetype_%29.md). Each social view controller you present is connected to only one social service at a time. Use this property to check which service your social view controller has specified. For a list of possible values, see Service Type Constants.

## See Also

### Checking the Social Service Type

- [isAvailableForServiceType:](isavailable%28forservicetype_%29.md): Returns A Boolean value that indicates whether you can send a request for a particular service type.
