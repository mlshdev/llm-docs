> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontroller/init(forservicetype:)](https://developer.apple.com/documentation/social/slcomposeviewcontroller/init(forservicetype:))

# init(forServiceType:) (Swift)

**Framework:** Social  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Creates a new social compose view controller.

## Declaration

```swift
init!(forServiceType serviceType: String!)
```

## Parameters

- `serviceType`: This specifies the social networking service to which you want to post. You must use one of the possible values listed in Service Type Constants. This also sets the value of [serviceType](servicetype.md). If an invalid `serviceType` is passed in, this method throws an exception.

<a id="return-value"></a>

## Return Value

Returns a social compose view controller or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

Use this method to create a social compose view controller. Do not use any other methods.

# composeViewControllerForServiceType: (Objective-C)

**Framework:** Social  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

Creates a new social compose view controller.

## Declaration

```objectivec
+ (SLComposeViewController *) composeViewControllerForServiceType:(NSString *) serviceType;
```

## Parameters

- `serviceType`: This specifies the social networking service to which you want to post. You must use one of the possible values listed in Service Type Constants. This also sets the value of [serviceType](servicetype.md). If an invalid `serviceType` is passed in, this method throws an exception.

<a id="return-value"></a>

## Return Value

Returns a social compose view controller or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

Use this method to create a social compose view controller. Do not use any other methods.
