> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.network.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.network.client)

# com.apple.security.network.client

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.7+

A Boolean value indicating whether your app may open outgoing network connections.

## Details

`com.apple.security.network.client`

<a id="Discussion"></a>

## Discussion

Use this key to allow your sandboxed app to connect to a server process running on another machine, or on the same machine.

> **Note**

>  For TCP sockets, the `com.apple.security.network.client` and [com.apple.security.network.server](com.apple.security.network.server.md) entitlements restrict only the initiation of a network connection, not the flow of data. Outgoing and incoming connections can both send and receive data.
>
> For UDP sockets, the network entitlements restrict both initiation and data flow. For example, an app with only the client entitlement enabled can send, but not receive, data. Apps using UDP usually require both entitlements.

To add this entitlement to your app, enable the App Sandbox capability in Xcode, and under Network, select Outgoing Connections (Client).

## See Also

### Networking

- [com.apple.security.network.server](com.apple.security.network.server.md): A Boolean value indicating whether your app may listen for incoming network connections.
- [App Attest Environment](com.apple.developer.devicecheck.appattest-environment.md): The environment for an app that uses the App Attest service to validate itself.
