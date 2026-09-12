> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/iconassettype](https://developer.apple.com/documentation/appstoreconnectapi/iconassettype)

# IconAssetType

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.2+

String that represents the type of icon contained in the build.

## Declaration

```
string IconAssetType
```

## Possible Values

- `APP_STORE`:
- `MESSAGES_APP_STORE`:
- `WATCH_APP_STORE`:
- `TV_OS_HOME_SCREEN`:
- `TV_OS_TOP_SHELF`:
- `ALTERNATE_EXPERIMENT`:

<a id="discussion"></a>

## Discussion

-`APP_STORE`: -`MESSAGES_APP_STORE`: -`WATCH_APP_STORE`: -`TV_OS_HOME_SCREEN`: -`TV_OS_TOP_SHELF`: -`ALTERNATE_EXPERIMENT`:

## See Also

### Objects and types

- [BuildIcon](buildicon.md): A PNG icon image extracted from a build, used for display in App Store Connect and TestFlight.
- [BuildIconsResponse](buildiconsresponse.md): A response containing a list of icon images for a build.
- [BuildIconsWithoutIncludesResponse](buildiconswithoutincludesresponse.md): A response containing a list of build icons, without related resources.
- [ImageAsset](imageasset.md): An image asset, including its height, width, and template URL.
