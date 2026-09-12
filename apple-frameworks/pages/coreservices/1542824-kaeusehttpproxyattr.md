> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542824-kaeusehttpproxyattr](https://developer.apple.com/documentation/coreservices/1542824-kaeusehttpproxyattr)

# kAEUseHTTPProxyAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Web Services Proxy support—these constants should be added as attributes of the event that is being sent (not as part of the direct object).

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kAEUseHTTPProxyAttr](1542824-kaeusehttpproxyattr/kaeusehttpproxyattr.md): A value of type `typeBoolean`. Specifies whether to manually specify the proxy host and port. Defaults to `true`.
- [kAEHTTPProxyPortAttr](1542824-kaeusehttpproxyattr/kaehttpproxyportattr.md): A value of type `typeSInt32`.
- [kAEHTTPProxyHostAttr](1542824-kaeusehttpproxyattr/kaehttpproxyhostattr.md): A value of type `typeChar` or `typeUTF8Text`.
