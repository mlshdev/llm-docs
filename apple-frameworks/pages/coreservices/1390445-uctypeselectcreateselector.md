> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390445-uctypeselectcreateselector](https://developer.apple.com/documentation/coreservices/1390445-uctypeselectcreateselector)

# UCTypeSelectCreateSelector(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func UCTypeSelectCreateSelector(_ locale: LocaleRef!, _ opVariant: LocaleOperationVariant, _ options: UCCollateOptions, _ newSelector: UnsafeMutablePointer<UCTypeSelectRef?>!) -> OSStatus
```

# UCTypeSelectCreateSelector (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
OSStatus UCTypeSelectCreateSelector(LocaleRef locale, LocaleOperationVariant opVariant, UCCollateOptions options, UCTypeSelectRef *newSelector);
```
