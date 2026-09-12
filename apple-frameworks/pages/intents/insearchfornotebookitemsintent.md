> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent)

# INSearchForNotebookItemsIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A request to search for notes, tasks, and reminders.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INSearchForNotebookItemsIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md) object when the user asks to search for existing notes, tasks, and reminders. The intent object contains search parameters such as the type of items to return, strings to match against the title or content, the completion status of tasks, or the trigger conditions used to generate reminders.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md) protocol. Your handler should confirm the request and create an [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md) object with the search results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to search for notebook items in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Show me all my notes on `<appName>` | Show me what I created last week on `<appName>` |
| zh_CN | 显示我所有的便笺(在`<appName>` 上) | 显示我上个星期所有新建立的(在 appName\> 上) |
| zh_HK | 顯示(`<appName>` 入面)所有嘅備忘錄 | 顯示我上星期(喺 `<appName>`)建立嘅項目 |
| zh_TW | 顯示我所有的備忘錄(在 `<appName>` 上) | 顯示我上週在 `<appName>` 上建立的東西 |
| yue_CN | 显示(`<appName>` 入面)所有嘅备忘录 | 显示我上星期(喺 `<appName>`)建立嘅项目 |
| ar | اعرض جميع ملاحظاتي على `<appName>` | اعرض ما تم إنشاؤه الأسبوع الماضي على  `<appName>` |
| da | vis mig alle mine noter i `<appName>` | vis mig hvad blev oprettet i `<appName>` sidste uge i |
| de | Zeige mir alle meine Notizen auf `<appName>` | Zeig mir die Notizen die ich letzte Woche in `<appName>` erstellt habe |
| es | Enséñame todas mis notas en `<appName>` | Muéstrame lo que creé en `<appName>` la semana pasada |
| fi | Näytä kaikki muistutukset apissa `<appName>` | Näytä viime viikolla apissa `<appName>` luomani muistutukset |
| fr | Montre-moi toutes mes notes sur `<appName>` | Montre-moi ce que j’ai créé la semaine dernière sur `<appName>` |
| he | תראי לי את כל הפתקים ב`<appName>` | תראי מה יצרתי שבוע שעבר ב`<appName>` |
| it | Mostrami tutte le mie note su `<appName>` | Mostrami cosa ho creato la scorsa settimana su `<appName>` |
| ja | `<appName>` のメモを全部見せて | `<appName>`  で先週作ったメモを全部見せて |
| ko | `<appName>` 에 있는 모든 노트 보여줘 | `<appName>`  에서 지난 주에 만든 것 보여줘 |
| ms | Tunjukkan semua nota saya pada `<appName>` | Tunjukkan item yang diciptakan minggu lepas pada `<appName>` |
| nb | Vis alle notatene mine i `<appName>` | Vis det jeg laget i forrige uke på `<appName>` |
| nl | Toon me alle notities in `<appName>` | Toon wat ik vorige week aangemaakt heb op `<appName>` |
| pt | Mostrar todas as minhas notas no `<appName>` | Mostre o que eu criei na semana passada no `<appName>` |
| ru | Покажи все мои заметки в `<appName>` | Покажи мне что я создал на прошлой неделе в `<appName>` |
| sv | Visa mig alla mina anteckningar i `<appName>` | Visa mig vad jag skapade förra veckan i `<appName>` |
| th | แสดงโน้ตทั้งหมดบนแอพ `<appName>` | แสดงสิ่งที่ฉันสร้างอาทิตย์ที่แล้วในแอพ `<appName>` |
| tr | `<appName>` ’deki tüm notlarımı göster | `<appName>` ’de geçen hafta oluşturduğum notları göster |

In the preceding examples, `<appName>` represents the name of the app whose Intents extension handles the request.

## Topics

### Initializing the Intent Object

- [init(title:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:temporalEventTriggerTypes:taskPriority:notebookItemIdentifier:)](insearchfornotebookitemsintent/init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_temporaleventtriggertypes_taskpriority_notebookitemidentifier_%29.md): Deprecated.
- [init(title:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:notebookItemIdentifier:)](insearchfornotebookitemsintent/init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_notebookitemidentifier_%29.md): Deprecated. Initializes the intent object with the specified search parameters.
- [init(title:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:)](insearchfornotebookitemsintent/init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_%29.md): Deprecated. Initializes the intent object with the specified search parameters.

### Searching by Type

- [itemType](insearchfornotebookitemsintent/itemtype.md): Deprecated. The type of items to include in your search.
- [INNotebookItemType](innotebookitemtype.md): Deprecated. Constants indicating the types of items to search.

### Searching by Content

- [title](insearchfornotebookitemsintent/title.md): Deprecated. The title text to search for in a note, task, or task list.
- [content](insearchfornotebookitemsintent/content.md): Deprecated. The text to search for in the body of a note.

### Searching for Tasks by Their Status

- [status](insearchfornotebookitemsintent/status.md): Deprecated. The completion state to look for when searching for tasks.
- [INTaskStatus](intaskstatus.md): Deprecated. Constants indicating the completion state of a task.

### Searching for Tasks by Location

- [location](insearchfornotebookitemsintent/location.md): Deprecated. The value to use when searching for location-triggered reminders.
- [locationSearchType](insearchfornotebookitemsintent/locationsearchtype.md): Deprecated. An indicator of how to apply location values to your search.
- [INLocationSearchType](inlocationsearchtype.md): Deprecated. Constants indicating the type of location-based search to perform.

### Searching by Date

- [dateTime](insearchfornotebookitemsintent/datetime.md): Deprecated. The value to use when performing date-based searches.
- [dateSearchType](insearchfornotebookitemsintent/datesearchtype.md): Deprecated. An indicator of how to apply date values to your search.
- [INDateSearchType](indatesearchtype.md): Deprecated. Constants indicating the type of date-based search to perform.

### Identifying the Notebook Item

- [notebookItemIdentifier](insearchfornotebookitemsintent/notebookitemidentifier.md): Deprecated. The unique identifier that your app assigned to the item.

### Searching for Tasks by Their Priority

- [taskPriority](insearchfornotebookitemsintent/taskpriority.md): Deprecated.
- [INTaskPriority](intaskpriority.md): Deprecated. Constants indicating the priority for a task.
- [temporalEventTriggerTypes](insearchfornotebookitemsintent/temporaleventtriggertypes.md): Deprecated.
- [INTemporalEventTriggerTypeOptions](intemporaleventtriggertypeoptions.md): Deprecated. Constants indicating how often to trigger an event.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notebook Search

- [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md): Deprecated. The handler interface for searching for notes, tasks, and reminders.
- [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md): Deprecated. Your app’s response to a request to search for notes, tasks, or reminders.

# INSearchForNotebookItemsIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A request to search for notes, tasks, and reminders.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INSearchForNotebookItemsIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md) object when the user asks to search for existing notes, tasks, and reminders. The intent object contains search parameters such as the type of items to return, strings to match against the title or content, the completion status of tasks, or the trigger conditions used to generate reminders.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md) protocol. Your handler should confirm the request and create an [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md) object with the search results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to search for notebook items in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Show me all my notes on `<appName>` | Show me what I created last week on `<appName>` |
| zh_CN | 显示我所有的便笺(在`<appName>` 上) | 显示我上个星期所有新建立的(在 appName\> 上) |
| zh_HK | 顯示(`<appName>` 入面)所有嘅備忘錄 | 顯示我上星期(喺 `<appName>`)建立嘅項目 |
| zh_TW | 顯示我所有的備忘錄(在 `<appName>` 上) | 顯示我上週在 `<appName>` 上建立的東西 |
| yue_CN | 显示(`<appName>` 入面)所有嘅备忘录 | 显示我上星期(喺 `<appName>`)建立嘅项目 |
| ar | اعرض جميع ملاحظاتي على `<appName>` | اعرض ما تم إنشاؤه الأسبوع الماضي على  `<appName>` |
| da | vis mig alle mine noter i `<appName>` | vis mig hvad blev oprettet i `<appName>` sidste uge i |
| de | Zeige mir alle meine Notizen auf `<appName>` | Zeig mir die Notizen die ich letzte Woche in `<appName>` erstellt habe |
| es | Enséñame todas mis notas en `<appName>` | Muéstrame lo que creé en `<appName>` la semana pasada |
| fi | Näytä kaikki muistutukset apissa `<appName>` | Näytä viime viikolla apissa `<appName>` luomani muistutukset |
| fr | Montre-moi toutes mes notes sur `<appName>` | Montre-moi ce que j’ai créé la semaine dernière sur `<appName>` |
| he | תראי לי את כל הפתקים ב`<appName>` | תראי מה יצרתי שבוע שעבר ב`<appName>` |
| it | Mostrami tutte le mie note su `<appName>` | Mostrami cosa ho creato la scorsa settimana su `<appName>` |
| ja | `<appName>` のメモを全部見せて | `<appName>`  で先週作ったメモを全部見せて |
| ko | `<appName>` 에 있는 모든 노트 보여줘 | `<appName>`  에서 지난 주에 만든 것 보여줘 |
| ms | Tunjukkan semua nota saya pada `<appName>` | Tunjukkan item yang diciptakan minggu lepas pada `<appName>` |
| nb | Vis alle notatene mine i `<appName>` | Vis det jeg laget i forrige uke på `<appName>` |
| nl | Toon me alle notities in `<appName>` | Toon wat ik vorige week aangemaakt heb op `<appName>` |
| pt | Mostrar todas as minhas notas no `<appName>` | Mostre o que eu criei na semana passada no `<appName>` |
| ru | Покажи все мои заметки в `<appName>` | Покажи мне что я создал на прошлой неделе в `<appName>` |
| sv | Visa mig alla mina anteckningar i `<appName>` | Visa mig vad jag skapade förra veckan i `<appName>` |
| th | แสดงโน้ตทั้งหมดบนแอพ `<appName>` | แสดงสิ่งที่ฉันสร้างอาทิตย์ที่แล้วในแอพ `<appName>` |
| tr | `<appName>` ’deki tüm notlarımı göster | `<appName>` ’de geçen hafta oluşturduğum notları göster |

In the preceding examples, `<appName>` represents the name of the app whose Intents extension handles the request.

## Topics

### Initializing the Intent Object

- [initWithTitle:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:temporalEventTriggerTypes:taskPriority:notebookItemIdentifier:](insearchfornotebookitemsintent/init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_temporaleventtriggertypes_taskpriority_notebookitemidentifier_%29.md): Deprecated.
- [initWithTitle:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:notebookItemIdentifier:](insearchfornotebookitemsintent/init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_notebookitemidentifier_%29.md): Deprecated. Initializes the intent object with the specified search parameters.
- [initWithTitle:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:](insearchfornotebookitemsintent/init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_%29.md): Deprecated. Initializes the intent object with the specified search parameters.

### Searching by Type

- [itemType](insearchfornotebookitemsintent/itemtype.md): Deprecated. The type of items to include in your search.
- [INNotebookItemType](innotebookitemtype.md): Deprecated. Constants indicating the types of items to search.

### Searching by Content

- [title](insearchfornotebookitemsintent/title.md): Deprecated. The title text to search for in a note, task, or task list.
- [content](insearchfornotebookitemsintent/content.md): Deprecated. The text to search for in the body of a note.

### Searching for Tasks by Their Status

- [status](insearchfornotebookitemsintent/status.md): Deprecated. The completion state to look for when searching for tasks.
- [INTaskStatus](intaskstatus.md): Deprecated. Constants indicating the completion state of a task.

### Searching for Tasks by Location

- [location](insearchfornotebookitemsintent/location.md): Deprecated. The value to use when searching for location-triggered reminders.
- [locationSearchType](insearchfornotebookitemsintent/locationsearchtype.md): Deprecated. An indicator of how to apply location values to your search.
- [INLocationSearchType](inlocationsearchtype.md): Deprecated. Constants indicating the type of location-based search to perform.

### Searching by Date

- [dateTime](insearchfornotebookitemsintent/datetime.md): Deprecated. The value to use when performing date-based searches.
- [dateSearchType](insearchfornotebookitemsintent/datesearchtype.md): Deprecated. An indicator of how to apply date values to your search.
- [INDateSearchType](indatesearchtype.md): Deprecated. Constants indicating the type of date-based search to perform.

### Identifying the Notebook Item

- [notebookItemIdentifier](insearchfornotebookitemsintent/notebookitemidentifier.md): Deprecated. The unique identifier that your app assigned to the item.

### Searching for Tasks by Their Priority

- [taskPriority](insearchfornotebookitemsintent/taskpriority.md): Deprecated.
- [INTaskPriority](intaskpriority.md): Deprecated. Constants indicating the priority for a task.
- [temporalEventTriggerTypes](insearchfornotebookitemsintent/temporaleventtriggertypes.md): Deprecated.
- [INTemporalEventTriggerTypeOptions](intemporaleventtriggertypeoptions.md): Deprecated. Constants indicating how often to trigger an event.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Notebook Search

- [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md): Deprecated. The handler interface for searching for notes, tasks, and reminders.
- [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md): Deprecated. Your app’s response to a request to search for notes, tasks, or reminders.
