> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertysectorcountpertrackkey](https://developer.apple.com/documentation/iokit/kiopropertysectorcountpertrackkey)

# kIOPropertySectorCountPerTrackKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
#define kIOPropertySectorCountPerTrackKey
```

<a id="discussion"></a>

## Discussion

This key is used to define the number of sectors per each track for a particular medium.

Requirement: Mandatory element of the Rigid Disk Geometry dictionary.

Example:

<a id="2556702"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Device Characteristics</key>
   <dict>
   	<key>Vendor Name</key>
   	<string>Apple</string>
   	<key>Product Name</key>
   	<string>iPod</string>
   	<key>Product Revision Level</key>
   	<string>1.0</string>
   	<key>Rigid Disk Geometry</key>
   	<dict>
   		<key>Sector Count per Track</key>
   		<integer>12345</integer>
   	</dict>
   </dict>
</dict>
```
