> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516405-register_component_resource_flag/registercomponentafterexisting](https://developer.apple.com/documentation/coreservices/1516405-register_component_resource_flag/registercomponentafterexisting)

# registerComponentAfterExisting

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
registerComponentAfterExisting = 4
```

<a id="discussion"></a>

## Discussion

Specify this flag to indicate that this component should be registered after all other components with the same component type. Usually components are registered before others with identical descriptions; specifying this flag overrides that behavior.
