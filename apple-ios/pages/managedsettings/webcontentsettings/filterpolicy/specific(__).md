> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/webcontentsettings/filterpolicy/specific(_:)](https://developer.apple.com/documentation/managedsettings/webcontentsettings/filterpolicy/specific(_:))

# WebContentSettings.FilterPolicy.specific(\_:)

**Framework:** Managed Settings  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The policy blocks the specified domains.

## Declaration

```swift
case specific(Set<WebDomain>)
```

<a id="discussion"></a>

## Discussion

Your app can block up to 50 web domains at once.

## See Also

### Providing filters and exceptions

- [WebContentSettings.FilterPolicy.all(except:)](all%28except_%29.md): The system blocks all websites except the ones you specify.
- [WebContentSettings.FilterPolicy.auto(\_:except:)](auto%28__except_%29.md): The system blocks adult content.
- [WebContentSettings.FilterPolicy.none](none.md): The policy doesn’t affect any domains.
