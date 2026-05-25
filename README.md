# Moving Storage Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIMovingStorageOperationsAssistant`
- `AIMovingStorageOperationsOperations`
- `AIMovingStorageOperationsAnalytics`
- `AIMovingStorageOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/moving-storage-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5440`

Seeded users:
- `admin@moving-storage-operations.local / admin123`
- `manager@moving-storage-operations.local / manager123`
- `analyst@moving-storage-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/moving-storage-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5440 npm run smoke
```
