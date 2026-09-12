> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/webcontentsettings/filterpolicy/auto(_:except:)](https://developer.apple.com/documentation/managedsettings/webcontentsettings/filterpolicy/auto(_:except:))

# WebContentSettings.FilterPolicy.auto(\_:except:)

**Framework:** Managed Settings  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The system blocks adult content.

## Declaration

```swift
case auto(Set<WebDomain> = [], except: Set<WebDomain> = [])
```

<a id="discussion"></a>

## Discussion

The system also blocks websites you provide in `domains`. The system allows websites you provide in `except`, overriding the adult content filter and `domains` set. Your app can block up to 50 web domains and specify up to 50 web domains exceptions at once.

## See Also

### Providing filters and exceptions

- [WebContentSettings.FilterPolicy.all(except:)](all%28except_%29.md): The system blocks all websites except the ones you specify.
- [WebContentSettings.FilterPolicy.none](none.md): The policy doesn’t affect any domains.
- [WebContentSettings.FilterPolicy.specific(\_:)](specific%28__%29.md): The policy blocks the specified domains.
