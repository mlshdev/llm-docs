> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/bind(to:)](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/bind(to:))

# bind(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Binds a URL request to the network interface associated with the hotspot helper command instance.

## Declaration

```swift
func bind(to command: NEHotspotHelperCommand)
```

## Parameters

- `command`: The hotspot helper command to bind the request to.

<a id="Discussion"></a>

## Discussion

Apps that participate in joining Wi-Fi hotspot networks use the APIs in the [Network Extension](../../networkextension.md) framework to authenticate with hotspots. Ordinarily, [URLSession](../urlsession.md) will use the default interface, which may be WWAN. By binding to a hotspot helper command, you force a request to use Wi-Fi to communicate with the hotspot.

## See Also

### Related Documentation

- [Network Extension](../../networkextension.md): Customize and extend core networking features.

# bindToHotspotHelperCommand: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Binds a URL request to the network interface associated with the hotspot helper command instance.

## Declaration

```objectivec
- (void) bindToHotspotHelperCommand:(NEHotspotHelperCommand *) command;
```

## Parameters

- `command`: The hotspot helper command to bind the request to.

<a id="Discussion"></a>

## Discussion

Apps that participate in joining Wi-Fi hotspot networks use the APIs in the [Network Extension](../../networkextension.md) framework to authenticate with hotspots. Ordinarily, [NSURLSession](../urlsession.md) will use the default interface, which may be WWAN. By binding to a hotspot helper command, you force a request to use Wi-Fi to communicate with the hotspot.

## See Also

### Related Documentation

- [Network Extension](../../networkextension.md): Customize and extend core networking features.
