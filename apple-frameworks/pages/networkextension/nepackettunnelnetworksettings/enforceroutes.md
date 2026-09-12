> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelnetworksettings/enforceroutes](https://developer.apple.com/documentation/networkextension/nepackettunnelnetworksettings/enforceroutes)

# enforceRoutes

**Interface language:** Objective-C

**Framework:** Network Extension  
**Kind:** Instance Property

## Declaration

```objectivec
@property BOOL enforceRoutes;
```

<a id="discussion"></a>

## Discussion

If YES, route rules for this tunnel will take precendence over any locally-defined routes. The default is NO. The enforceRoutes property in NEVPNProtocol class takes precedence if set.
