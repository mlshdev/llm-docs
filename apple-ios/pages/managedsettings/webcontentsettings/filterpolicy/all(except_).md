> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/webcontentsettings/filterpolicy/all(except:)

# WebContentSettings.FilterPolicy.all(except:)

**Framework:** Managed Settings  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The system blocks all websites except the ones you specify.

## Declaration

```swift
case all(except: Set<WebDomain> = [])
```

<a id="discussion"></a>

## Discussion

Your app can specify up to 50 web domains exceptions.

## See Also

### Providing filters and exceptions

- [WebContentSettings.FilterPolicy.auto(\_:except:)](auto%28__except_%29.md): The system blocks adult content.
- [WebContentSettings.FilterPolicy.none](none.md): The policy doesn’t affect any domains.
- [WebContentSettings.FilterPolicy.specific(\_:)](specific%28__%29.md): The policy blocks the specified domains.
