> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nenetworkrule/initwithremotenetworkendpoint:remoteprefix:localnetworkendpoint:localprefix:protocol:direction:

# initWithRemoteNetworkEndpoint:remotePrefix:localNetworkEndpoint:localPrefix:protocol:direction:

**Interface language:** Objective-C

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```objectivec
- (instancetype) initWithRemoteNetworkEndpoint:(nw_endpoint_t) remoteNetwork remotePrefix:(NSUInteger) remotePrefix localNetworkEndpoint:(nw_endpoint_t) localNetwork localPrefix:(NSUInteger) localPrefix protocol:(NENetworkRuleProtocol) protocol direction:(NETrafficDirection) direction;
```
