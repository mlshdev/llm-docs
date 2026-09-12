> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsapptransportsecurity/nsallowsarbitraryloadsformedia](https://developer.apple.com/documentation/bundleresources/information-property-list/nsapptransportsecurity/nsallowsarbitraryloadsformedia)

# NSAllowsArbitraryLoadsForMedia (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS 10.12+ · visionOS 1.0+

A Boolean value indicating whether all App Transport Security restrictions are disabled for requests made using the AV Foundation framework.

## Details

`NSAllowsArbitraryLoadsForMedia`

<a id="Discussion"></a>

## Discussion

Set this key’s value to `YES` to disable App Transport Security restrictions for media loaded using the [AVFoundation](../../../avfoundation.md) framework, without affecting your [URLSession](../../../foundation/urlsession.md) connections. Domains you specify in the [NSExceptionDomains](nsexceptiondomains.md) dictionary aren’t affected by this key’s value.

Employ this key only for loading encrypted media—like files protected by FairPlay or by secure [HTTP Live Streaming](../../../http-live-streaming.md)—that don’t contain personalized information.

In iOS 10 and later and in macOS 10.12 and later, if you include this key with any value, then App Transport Security ignores the value of the [NSAllowsArbitraryLoads](nsallowsarbitraryloads.md) key, instead using that key’s default value of `NO`. For more information about how the OS version affects ATS behavior, see the [NSAppTransportSecurity](../nsapptransportsecurity.md) key’s Versioning section.

> **Important**

>  You must supply a justification during App Store review if you set the key’s value to YES, as described in `Provide Justification for Exceptions`.

## See Also

### Global Exceptions

- [NSAllowsArbitraryLoads](nsallowsarbitraryloads.md): A Boolean value indicating whether App Transport Security restrictions are disabled for all network connections.
- [NSAllowsArbitraryLoadsInWebContent](nsallowsarbitraryloadsinwebcontent.md): A Boolean value indicating whether all App Transport Security restrictions are disabled for requests made from web views.
- [NSAllowsLocalNetworking](nsallowslocalnetworking.md): A Boolean value that indicates whether to allow local resources to load.

# NSAllowsArbitraryLoadsForMedia (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS 10.12+ · visionOS 1.0+

A Boolean value indicating whether all App Transport Security restrictions are disabled for requests made using the AV Foundation framework.

## Details

`NSAllowsArbitraryLoadsForMedia`

<a id="Discussion"></a>

## Discussion

Set this key’s value to `YES` to disable App Transport Security restrictions for media loaded using the [AVFoundation](../../../avfoundation.md) framework, without affecting your [NSURLSession](../../../foundation/urlsession.md) connections. Domains you specify in the [NSExceptionDomains](nsexceptiondomains.md) dictionary aren’t affected by this key’s value.

Employ this key only for loading encrypted media—like files protected by FairPlay or by secure [HTTP Live Streaming](../../../http-live-streaming.md)—that don’t contain personalized information.

In iOS 10 and later and in macOS 10.12 and later, if you include this key with any value, then App Transport Security ignores the value of the [NSAllowsArbitraryLoads](nsallowsarbitraryloads.md) key, instead using that key’s default value of `NO`. For more information about how the OS version affects ATS behavior, see the [NSAppTransportSecurity](../nsapptransportsecurity.md) key’s Versioning section.

> **Important**

>  You must supply a justification during App Store review if you set the key’s value to YES, as described in `Provide Justification for Exceptions`.

## See Also

### Global Exceptions

- [NSAllowsArbitraryLoads](nsallowsarbitraryloads.md): A Boolean value indicating whether App Transport Security restrictions are disabled for all network connections.
- [NSAllowsArbitraryLoadsInWebContent](nsallowsarbitraryloadsinwebcontent.md): A Boolean value indicating whether all App Transport Security restrictions are disabled for requests made from web views.
- [NSAllowsLocalNetworking](nsallowslocalnetworking.md): A Boolean value that indicates whether to allow local resources to load.
