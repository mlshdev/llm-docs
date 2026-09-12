> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516405-register_component_resource_flag/registercomponentglobal](https://developer.apple.com/documentation/coreservices/1516405-register_component_resource_flag/registercomponentglobal)

# registerComponentGlobal

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
registerComponentGlobal = 1
```

<a id="discussion"></a>

## Discussion

Specify this flag to indicate that this component should be made available to other applications and clients as well as the one performing the registration. If you do not specify this flag, the component is available for use only by the registering application or component (that is, the component is local to the A5 world of the registering program).
