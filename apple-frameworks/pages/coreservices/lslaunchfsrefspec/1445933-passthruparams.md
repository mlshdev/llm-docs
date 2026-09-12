> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lslaunchfsrefspec/1445933-passthruparams](https://developer.apple.com/documentation/coreservices/lslaunchfsrefspec/1445933-passthruparams)

# passThruParams (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.10)

A pointer to an Apple event descriptor that ispassed untouched as an optional parameter, with keyword `keyAEPropData` (`'prdt'`),in the Apple event sent to each application launched or activated(whether individual preferred applications or the application designatedby `appRef`). See the *AppleEvent Manager Reference* in the Carbon Interapplication CommunicationDocumentation for a description of the `AEDesc` datatype. The value of this field can be `NULL`.

## Declaration

```swift
var passThruParams: UnsafePointer<AEDesc>!
```

# passThruParams (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.10)

A pointer to an Apple event descriptor that ispassed untouched as an optional parameter, with keyword `keyAEPropData` (`'prdt'`),in the Apple event sent to each application launched or activated(whether individual preferred applications or the application designatedby `appRef`). See the *AppleEvent Manager Reference* in the Carbon Interapplication CommunicationDocumentation for a description of the `AEDesc` datatype. The value of this field can be `NULL`.

## Declaration

```objectivec
const AEDesc *passThruParams;
```
