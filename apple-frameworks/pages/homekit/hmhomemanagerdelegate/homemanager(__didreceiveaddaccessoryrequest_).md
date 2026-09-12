> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanagerdelegate/homemanager(_:didreceiveaddaccessoryrequest:)](https://developer.apple.com/documentation/homekit/hmhomemanagerdelegate/homemanager(_:didreceiveaddaccessoryrequest:))

# homeManager(\_:didReceiveAddAccessoryRequest:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Tells the delegate to add an accessory to a home by using a setup payload.

## Declaration

```swift
optional func homeManager(_ manager: HMHomeManager, didReceiveAddAccessoryRequest request: HMAddAccessoryRequest)
```

## Parameters

- `manager`: The home manager making the request.
- `request`: A description of the accessory to add.

<a id="Discussion"></a>

## Discussion

HomeKit calls this method when it needs help adding an accessory to a home, which typically occurs when the accessory requires explicit user authentication that HomeKit can’t negotiate. HomeKit asks the accessory manufacturer’s app, which it locates using information provided by the accessory, to complete the authentication.

If you manufacture an accessory like this, handle the [homeManager(\_:didReceiveAddAccessoryRequest:)](homemanager%28__didreceiveaddaccessoryrequest_%29.md) call in your app by creating an [HMAccessoryOwnershipToken](../hmaccessoryownershiptoken.md) instance in a way that’s appropriate for your accessory, outside of HomeKit:

```swift
let data = negotiateTokenData(accessory: request.accessoryName)
guard let token = HMAccessoryOwnershipToken(data: data) else { return }
```

Use the resulting token to create an [HMAccessorySetupPayload](../hmaccessorysetuppayload.md) instance. If the request’s [requiresSetupPayloadURL](../hmaddaccessoryrequest/requiressetuppayloadurl.md) flag is `true`, get the payload URL corresponding to the named accessory, and include that in the setup payload as well:

```swift
var payload: HMAccessorySetupPayload?
if request.requiresSetupPayloadURL {
    let payloadURL = getPayloadURL(accessory: request.accessoryName)
    payload = request.makePayload(url: payloadURL, ownershipToken: token)
} else {
    payload = request.makePayload(ownershipToken: token)
}
```

Complete the setup by calling the home’s [addAndSetupAccessories(with:completionHandler:)](../hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method with the payload:

```swift
if let payload = payload {
    request.home.addAndSetupAccessories(with: payload) { accessories, error in
        // Handle errors.
    }
}
```

## See Also

### Adding accessories

- [HMAddAccessoryRequest](../hmaddaccessoryrequest.md): A request to add an accessory to a particular home.

# homeManager:didReceiveAddAccessoryRequest: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Tells the delegate to add an accessory to a home by using a setup payload.

## Declaration

```objectivec
- (void) homeManager:(HMHomeManager *) manager didReceiveAddAccessoryRequest:(HMAddAccessoryRequest *) request;
```

## Parameters

- `manager`: The home manager making the request.
- `request`: A description of the accessory to add.

<a id="Discussion"></a>

## Discussion

HomeKit calls this method when it needs help adding an accessory to a home, which typically occurs when the accessory requires explicit user authentication that HomeKit can’t negotiate. HomeKit asks the accessory manufacturer’s app, which it locates using information provided by the accessory, to complete the authentication.

If you manufacture an accessory like this, handle the [homeManager:didReceiveAddAccessoryRequest:](homemanager%28__didreceiveaddaccessoryrequest_%29.md) call in your app by creating an [HMAccessoryOwnershipToken](../hmaccessoryownershiptoken.md) instance in a way that’s appropriate for your accessory, outside of HomeKit:

```swift
let data = negotiateTokenData(accessory: request.accessoryName)
guard let token = HMAccessoryOwnershipToken(data: data) else { return }
```

Use the resulting token to create an [HMAccessorySetupPayload](../hmaccessorysetuppayload.md) instance. If the request’s [requiresSetupPayloadURL](../hmaddaccessoryrequest/requiressetuppayloadurl.md) flag is `true`, get the payload URL corresponding to the named accessory, and include that in the setup payload as well:

```swift
var payload: HMAccessorySetupPayload?
if request.requiresSetupPayloadURL {
    let payloadURL = getPayloadURL(accessory: request.accessoryName)
    payload = request.makePayload(url: payloadURL, ownershipToken: token)
} else {
    payload = request.makePayload(ownershipToken: token)
}
```

Complete the setup by calling the home’s [addAndSetupAccessoriesWithPayload:completionHandler:](../hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method with the payload:

```swift
if let payload = payload {
    request.home.addAndSetupAccessories(with: payload) { accessories, error in
        // Handle errors.
    }
}
```

## See Also

### Adding accessories

- [HMAddAccessoryRequest](../hmaddaccessoryrequest.md): A request to add an accessory to a particular home.
